import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ingredients } from '../../data/mockData';
import { usePreferences } from '../../context/PreferencesContext';

const IngredientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { preferences, toggleFavoriteIngredient } = usePreferences();

  const ingredient = useMemo(() => {
    return ingredients.find(i => i.id === id);
  }, [id]);

  if (!ingredient) {
    return (
      <div className="min-h-screen bg-sous-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Ingredient not found</h2>
          <button
            onClick={() => navigate('/ingredients')}
            className="sous-button bg-sous-primary"
          >
            Back to Ingredients
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = preferences.favoriteIngredients.includes(ingredient.id);

  return (
    <div className="min-h-screen bg-sous-background pb-20">
      {/* Hero Image Section */}
      <div className="relative h-64">
        <img
          src={ingredient.imageUrl || 'https://via.placeholder.com/800x400'}
          alt={ingredient.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate('/ingredients')}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/80 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => toggleFavoriteIngredient(ingredient.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? 'text-sous-accent fill-current' : 'text-gray-500'}`}
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{ingredient.name}</h1>
        <span className="inline-block px-3 py-1 bg-sous-primary/10 text-sous-primary rounded-full text-sm font-medium mb-4">
          {ingredient.category}
        </span>
        <p className="text-gray-600 mb-6">{ingredient.description}</p>

        {/* Nutrition Facts */}
        {ingredient.nutritionFacts && (
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Nutrition Facts</h2>
            <div className="border-t border-b border-gray-200 py-2">
              <p className="text-sm text-gray-500">Serving Size: {ingredient.nutritionFacts.servingSize}</p>
            </div>
            <div className="space-y-2 mt-2">
              <div className="flex justify-between">
                <span className="font-medium">Calories</span>
                <span>{ingredient.nutritionFacts.calories}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Fat</span>
                <span>{ingredient.nutritionFacts.fat}g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Carbs</span>
                <span>{ingredient.nutritionFacts.carbs}g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Protein</span>
                <span>{ingredient.nutritionFacts.protein}g</span>
              </div>
              {ingredient.nutritionFacts.sodium && (
                <div className="flex justify-between">
                  <span className="font-medium">Sodium</span>
                  <span>{ingredient.nutritionFacts.sodium}mg</span>
                </div>
              )}
              {ingredient.nutritionFacts.fiber && (
                <div className="flex justify-between">
                  <span className="font-medium">Fiber</span>
                  <span>{ingredient.nutritionFacts.fiber}g</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Substitutes */}
        {ingredient.substitutes && ingredient.substitutes.length > 0 && (
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Substitutes</h2>
            <ul className="space-y-2">
              {ingredient.substitutes.map((substitute, index) => (
                <li key={index} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sous-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {substitute}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tips */}
        {ingredient.tips && ingredient.tips.length > 0 && (
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Tips</h2>
            <ul className="space-y-2">
              {ingredient.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sous-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Density Information */}
        {ingredient.density && (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-bold mb-3">Density Information</h2>
            <p className="text-gray-600">
              Density: {ingredient.density} g/mL
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This information can be used for volume-to-weight conversions
            </p>
          </div>
        )}
      </div>

      {/* Quick Actions Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-around">
        <button className="sous-button bg-sous-primary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
          Measure Now
        </button>
        <button className="sous-button bg-sous-secondary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Add to Shopping List
        </button>
      </div>
    </div>
  );
};

export default IngredientDetail;
