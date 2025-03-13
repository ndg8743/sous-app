// Recipe and ingredient models for the SOUS app

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  notes?: string;
  rating?: number; // User-assigned rating
}

export interface RecipeIngredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface RecipeStep {
  id: string;
  order: number;
  instruction: string;
  imageUrl?: string;
  timer?: number; // in seconds, optional timer associated with this step
}

export interface Ingredient {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  category: string;
  substitutes?: string[];
  nutritionFacts?: NutritionFacts;
  density?: number; // g/mL, for volume-to-weight conversion
  tips?: string[];
}

export interface NutritionFacts {
  servingSize: string;
  calories: number;
  fat: number; // in grams
  carbs: number; // in grams
  protein: number; // in grams
  sodium?: number; // in milligrams
  sugar?: number; // in grams
  fiber?: number; // in grams
}

export interface MeasurementConversion {
  fromUnit: string;
  toUnit: string;
  conversionFactor: number;
}

// User for potential future authentication features
export interface User {
  id: string;
  username: string;
  email: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  darkMode: boolean;
  defaultMeasurementUnit: 'metric' | 'imperial';
  favoriteRecipes: string[];
  favoriteIngredients: string[];
}

// Types for filtering and sorting
export type RecipeSort = 
  | 'name' 
  | 'prepTime' 
  | 'cookTime' 
  | 'totalTime'
  | 'difficulty'
  | 'rating'
  | 'newest';

export type IngredientSort = 
  | 'name' 
  | 'category';

export interface RecipeFilters {
  difficulty?: ('easy' | 'medium' | 'hard')[];
  maxPrepTime?: number;
  maxCookTime?: number;
  tags?: string[];
  ingredients?: string[];
  favorite?: boolean;
}

export interface IngredientFilters {
  categories?: string[];
  favorite?: boolean;
}