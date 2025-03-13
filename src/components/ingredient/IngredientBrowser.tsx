import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ingredients } from '../../data/mockData';
import { usePreferences } from '../../context/PreferencesContext';

const IngredientBrowser: React.FC = () => {
  const navigate = useNavigate();
  const { preferences } = usePreferences();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from ingredients
  const categories = useMemo(() => {
    const uniqueCategories = new Set(ingredients.map(i => i.category));
    return Array.from(uniqueCategories);
  }, []);

  // Filter ingredients based on search and category
  const filteredIngredients = useMemo(() => {
    return ingredients.filter(ingredient => {
      const matchesSearch = searchQuery === '' ||
        ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ingredient.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || ingredient.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-sous-background dark:bg-gray-900 pb-20">
      {/* Search and Filter Section */}
      <div className="p-4 bg-white dark:bg-gray-800 shadow-sm">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sous-input pl-10"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2 space-x-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === null
                ? 'bg-sous-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-sous-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredIngredients.map(ingredient => {
            // Map ingredient categories to FontAwesome icons
            let iconClass = 'fa-question';
            
            if (ingredient.category === 'Flour') iconClass = 'fa-bread-slice';
            else if (ingredient.category === 'Sweeteners') iconClass = 'fa-candy-cane';
            else if (ingredient.category === 'Leavening Agents') iconClass = 'fa-arrow-up';
            else if (ingredient.category === 'Seasonings') iconClass = 'fa-pepper-hot';
            else if (ingredient.category === 'Grains') iconClass = 'fa-wheat';
            else if (ingredient.category === 'Baking Additions') iconClass = 'fa-mortar-pestle';
            
            return (
              <button
                key={ingredient.id}
                onClick={() => navigate(`/ingredients/${ingredient.id}`)}
                className="bg-white dark:bg-gray-800 bg-day-surface rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 bg-day-light flex items-center justify-center mb-3">
                  <i className={`fas ${iconClass} text-2xl text-sous-accent dark:text-sous-accent text-day-dark`}></i>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white text-day-text text-center">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-day-text text-center mt-1">
                  {ingredient.category}
                </p>
                {preferences.favoriteIngredients.includes(ingredient.id) && (
                  <i className="fas fa-heart text-sous-accent mt-2"></i>
                )}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredIngredients.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No ingredients found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="sous-button bg-sous-primary"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientBrowser;
