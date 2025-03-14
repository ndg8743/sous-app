import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipes } from '../../data/mockData';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients'>('details');

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="pb-20">
        <div className="p-4">
          <p className="text-gray-600 dark:text-gray-400">Recipe not found.</p>
        </div>
      </div>
    );
  }

  const handleStartGuidedMode = () => {
    navigate(`/recipes/${recipe.id}/guided`);
  };

  return (
    <div className="pb-20">

      {/* Recipe Image */}
      {recipe.imageUrl && (
        <div className="relative h-48 w-full">
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-4 px-1 text-center border-b-2 text-sm font-medium ${
              activeTab === 'details'
                ? 'border-sous-primary text-sous-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`flex-1 py-4 px-1 text-center border-b-2 text-sm font-medium ${
              activeTab === 'ingredients'
                ? 'border-sous-primary text-sous-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            Ingredients
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'details' && (
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-400">{recipe.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Preparation Time</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Prep</span>
                  <span className="block text-lg font-medium text-gray-900 dark:text-white">
                    {recipe.prepTime} min
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Cook</span>
                  <span className="block text-lg font-medium text-gray-900 dark:text-white">
                    {recipe.cookTime} min
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center">
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Total</span>
                  <span className="block text-lg font-medium text-gray-900 dark:text-white">
                    {recipe.prepTime + recipe.cookTime} min
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Difficulty</h3>
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  recipe.difficulty === 'easy'
                    ? 'bg-green-100 text-green-800'
                    : recipe.difficulty === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="py-3 flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white">{ingredient.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Start Guided Mode Button */}
        <button
          onClick={handleStartGuidedMode}
          className="mt-6 w-full bg-sous-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-sous-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sous-primary"
        >
          Start Guided Baking Mode
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
