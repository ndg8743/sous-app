# SOUS Baking Measurement Device UI

A touch-based interface for the SOUS baking measurement device, optimized for 5-7" screens with animations and haptic feedback.

## Features

- **Touch-Optimized UI**: Large touch targets (48x48px minimum) with appropriate spacing
- **Responsive Design**: Tailwind CSS for consistent styling across screen sizes
- **Animated Interactions**: Visual feedback for all user interactions
- **Dark/Light Modes**: Support for different lighting conditions
- **Offline Functionality**: Core features work without network connectivity
- **Measurement Simulation**: Realistic weight/volume changes with random variations

## Key Screens

- **Home**: Quick access to recipes, measurement tools, and ingredients
- **Recipe Browser**: Searchable recipe collection with filtering options
- **Recipe Detail**: Step-by-step instructions with ingredient lists
- **Guided Baking Mode**: Interactive cooking assistant with timers
- **Measure Interface**: Precision measurement tools with target weights
- **Ingredient Browser**: Searchable ingredient database with nutritional info
- **Settings**: User preferences and device configuration

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## GitHub Pages Deployment

1. Push to GitHub
2. Go to Settings > Actions > General > Set "Workflow permissions" to "Read and write"
3. Go to Settings > Pages > Build and deployment > Source > Select "GitHub Actions"
4. The GitHub Actions workflow will automatically deploy to GitHub Pages

The site will be available at `https://ndg8743.github.io/sous-app/`
