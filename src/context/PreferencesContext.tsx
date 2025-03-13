import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

export type MeasurementSystem = 'metric' | 'imperial';
export type ThemeOption = 'light' | 'dark' | 'night' | 'day' | 'white';

export interface UserPreferences {
  theme: ThemeOption;
  measurementSystem: MeasurementSystem;
  defaultMeasurementUnit?: 'g' | 'oz';
  favoriteRecipes: string[];
  favoriteIngredients: string[];
}

interface PreferencesContextType {
  preferences: UserPreferences;
  updatePreferences: (newPreferences: UserPreferences) => void;
  toggleFavoriteIngredient: (id: string) => void;
}

const defaultPreferences: UserPreferences = {
  theme: 'light',
  measurementSystem: 'metric',
  defaultMeasurementUnit: 'g',
  favoriteRecipes: ['1', '2', '3'], // Default favorite recipes by ID
  favoriteIngredients: ['1', '2', '3'] // Default favorite ingredients by ID
};

export const PreferencesContext = createContext<PreferencesContextType>({
  preferences: defaultPreferences,
  updatePreferences: () => {},
  toggleFavoriteIngredient: () => {}
});

interface PreferencesProviderProps {
  children: ReactNode;
}

export const PreferencesProvider: React.FC<PreferencesProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    // Try to load preferences from localStorage
    const savedPreferences = localStorage.getItem('sous-preferences');
    return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
  });

  // Update the theme class on the document whenever the theme preference changes
  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove('dark', 'night', 'day', 'white');
    
    // Add the appropriate class based on the selected theme
    switch (preferences.theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        break;
      case 'night':
        document.documentElement.classList.add('night');
        break;
      case 'day':
        document.documentElement.classList.add('day');
        break;
      case 'white':
        document.documentElement.classList.add('white');
        break;
      // Light theme is the default, no class needed
    }
  }, [preferences.theme]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('sous-preferences', JSON.stringify(preferences));
  }, [preferences]);

  const updatePreferences = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
  };

  const toggleFavoriteIngredient = (id: string) => {
    setPreferences(prev => {
      const favorites = [...prev.favoriteIngredients];
      const index = favorites.indexOf(id);
      
      if (index >= 0) {
        favorites.splice(index, 1);
      } else {
        favorites.push(id);
      }
      
      return {
        ...prev,
        favoriteIngredients: favorites
      };
    });
  };

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreferences, toggleFavoriteIngredient }}>
      {children}
    </PreferencesContext.Provider>
  );
};

// Custom hook to use the preferences context
export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};
