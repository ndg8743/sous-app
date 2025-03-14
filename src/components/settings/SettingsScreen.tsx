import React from 'react';
import { usePreferences } from '../../context/PreferencesContext';
import ThemeSwitcher from './ThemeSwitcher';

const SettingsScreen: React.FC = () => {
  const { preferences, updatePreferences } = usePreferences();

  const toggleMeasurementSystem = () => {
    updatePreferences({
      ...preferences,
      measurementSystem: preferences.measurementSystem === 'metric' ? 'imperial' : 'metric'
    });
  };

  return (
    <div className="pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Settings
        </h1>

        {/* Measurement System */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Measurement System
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">
              {preferences.measurementSystem === 'metric' ? 'Metric (g, ml)' : 'Imperial (oz, cups)'}
            </span>
            <button
              onClick={toggleMeasurementSystem}
              className="bg-sous-primary text-white px-4 py-2 rounded-lg"
            >
              Switch to {preferences.measurementSystem === 'metric' ? 'Imperial' : 'Metric'}
            </button>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
          <ThemeSwitcher />
        </div>

        {/* About */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            About SOUS
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Version: 0.1.0
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            SOUS is a smart baking measurement assistant designed to help you achieve perfect results every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
