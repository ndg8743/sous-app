import React from 'react';
import { usePreferences } from '../../context/PreferencesContext';
import { ThemeOption } from '../../context/PreferencesContext';

const ThemeSwitcher: React.FC = () => {
  const { preferences, updatePreferences } = usePreferences();

  const themes: { value: ThemeOption; label: string; icon: string; color: string }[] = [
    { value: 'light', label: 'Light Mode', icon: 'fa-sun', color: 'bg-white' },
    { value: 'dark', label: 'Dark Mode', icon: 'fa-moon', color: 'bg-dark-bg' },
    { value: 'night', label: 'Night Mode', icon: 'fa-star', color: 'bg-night-bg' },
    { value: 'day', label: 'Day Mode', icon: 'fa-coffee', color: 'bg-day-bg' },
    { value: 'white', label: 'White Mode', icon: 'fa-snowflake', color: 'bg-white-bg' },
  ];

  const handleThemeChange = (theme: ThemeOption) => {
    updatePreferences({
      ...preferences,
      theme
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Theme Settings
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className={`flex items-center p-4 rounded-lg transition-colors ${
              preferences.theme === theme.value
                ? 'bg-sous-primary text-white'
                : `${theme.color} text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700`
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              preferences.theme === theme.value ? 'bg-white text-sous-primary' : 'bg-gray-100 text-gray-700'
            }`}>
              <i className={`fas ${theme.icon}`}></i>
            </div>
            <span className="ml-4">{theme.label}</span>
            {preferences.theme === theme.value && (
              <i className="fas fa-check ml-auto"></i>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
