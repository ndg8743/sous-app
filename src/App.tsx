import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PreferencesProvider } from './context/PreferencesContext';

// Layout Components
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';

// Screen Components
import SplashScreen from './components/home/SplashScreen';
import HomeScreen from './components/home/HomeScreen';
import IngredientBrowser from './components/ingredient/IngredientBrowser';
import IngredientDetail from './components/ingredient/IngredientDetail';
import RecipeBrowser from './components/recipe/RecipeBrowser';
import RecipeDetail from './components/recipe/RecipeDetail';
import GuidedBakingMode from './components/recipe/GuidedBakingMode';
import MeasureInterface from './components/measure/MeasureInterface';
import SettingsScreen from './components/settings/SettingsScreen';

const App: React.FC = () => {
  return (
    <PreferencesProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="min-h-screen bg-sous-background dark:bg-gray-900">
          <Routes>
            {/* Redirect root to splash screen */}
            <Route path="/" element={<SplashScreen />} />
            
            {/* Home route */}
            <Route path="/home" element={
              <>
                <Header title="SOUS" />
                <HomeScreen />
                <Navigation />
              </>
            } />

            {/* Ingredients routes */}
            <Route path="/ingredients" element={
              <>
                <Header title="Ingredients" />
                <IngredientBrowser />
                <Navigation />
              </>
            } />
            <Route path="/ingredients/:id" element={
              <>
                <Header title="Ingredient" showBackButton />
                <IngredientDetail />
                <Navigation />
              </>
            } />

            {/* Recipes routes */}
            <Route path="/recipes" element={
              <>
                <Header title="Recipes" />
                <RecipeBrowser />
                <Navigation />
              </>
            } />
            <Route path="/recipes/:id" element={
              <>
                <Header title="Recipe" showBackButton />
                <RecipeDetail />
                <Navigation />
              </>
            } />
            <Route path="/recipes/:id/guided" element={
              <>
                <Header title="Guided Baking" showBackButton />
                <GuidedBakingMode />
                <Navigation />
              </>
            } />

            {/* Measure route */}
            <Route path="/measure" element={
              <>
                <Header title="Measure" showBackButton />
                <MeasureInterface />
                <Navigation />
              </>
            } />

            {/* Settings route */}
            <Route path="/more" element={
              <>
                <Header title="Settings" />
                <SettingsScreen />
                <Navigation />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </PreferencesProvider>
  );
};

export default App;
