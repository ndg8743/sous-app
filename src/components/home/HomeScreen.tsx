import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {

  // Food categories with FontAwesome icons
  const foodCategories = [
    { name: 'Cookies', icon: 'fa-cookie', path: '/recipes/2' },
    { name: 'Cakes', icon: 'fa-birthday-cake', path: '/recipes/4' },
    { name: 'Pie', icon: 'fa-chart-pie', path: '/recipes/5' },
    { name: 'Bread', icon: 'fa-bread-slice', path: '/recipes/1' },
    { name: 'Pizza', icon: 'fa-pizza-slice', path: '/recipes/3' },
    { name: 'Pasta', icon: 'fa-utensils', path: '/recipes/6' }
  ];

  return (
    <div className="pb-20">
      {/* Personalized Greeting */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-day-text">
          Hi, Maggie
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-day-text mt-2 text-lg">
          What would you like to make today?
        </p>
      </div>

      {/* Food Categories */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Favorites
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {foodCategories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="bg-white dark:bg-gray-800 bg-day-light rounded-lg shadow p-4 flex flex-col items-center justify-center h-32 transform transition-transform hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              <i className={`fas ${category.icon} text-3xl text-day-dark mb-2 transition-all duration-300 hover:text-day-medium`}></i>
              <span className="text-gray-900 dark:text-white text-day-text font-medium">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 mt-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/measure"
            className="bg-day-dark text-white rounded-lg shadow p-4 flex items-center justify-center h-16 transform transition-transform hover:scale-105 active:scale-95"
          >
            <i className="fas fa-balance-scale mr-2 animate-bounce"></i>
            <span>Measure Ingredients</span>
          </Link>
          <Link
            to="/ingredients"
            className="bg-day-medium text-white rounded-lg shadow p-4 flex items-center justify-center h-16 transform transition-transform hover:scale-105 active:scale-95"
          >
            <i className="fas fa-list mr-2 animate-pulse"></i>
            <span>Browse Ingredients</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
