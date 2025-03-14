import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../../data/mockData';

const RecipeBrowser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'bread', name: 'Bread' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'dinner', name: 'Dinner' },
  ];

  const filteredRecipes = recipes.filter(recipe => {
    // Apply search filter
    const matchesSearch = searchTerm === '' || 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply category filter
    const matchesFilter = activeFilter === 'all' || 
      recipe.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pb-20">
      {/* Search Bar */}
      <div className="p-4 bg-white dark:bg-gray-800 shadow-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            className="sous-input pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="p-4 overflow-x-auto">
        <div className="flex space-x-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-sous-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe List */}
      <div className="p-4">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No recipes found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRecipes.map(recipe => (
              <Link
                key={recipe.id}
                to={`/recipes/${recipe.id}`}
                className="block bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
              >
                <div className="flex">
                  <div className="w-1/3 h-32 bg-gray-200 dark:bg-gray-700">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {recipe.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">
                      {recipe.description}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center mr-4">
                        <i className="fas fa-clock mr-1"></i>
                        {recipe.prepTime + recipe.cookTime} min
                      </span>
                      <span className="flex items-center">
                        <i className="fas fa-utensils mr-1"></i>
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeBrowser;
