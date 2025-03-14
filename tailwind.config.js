module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      colors: {
        // Logo-based colors
        'sous-primary': '#30C8E6', // Blue from logo
        'sous-primary-dark': '#1EAFD0', // Darker blue
        'sous-secondary': '#FFA726', // Orange from logo
        'sous-accent': '#654321', // brown from logo
        'sous-background': '#FFD6E5', // Pink from logo
        'sous-success': '#10B981', // Keep original success color
        'sous-error': '#EF4444', // Keep original error color
        
        // Dark Mode (Black)
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-text': '#FFFFFF',
        
        // Night Mode (Current Dark Mode - Blue-based)
        'night-bg': '#1E293B',
        'night-surface': '#334155',
        'night-text': '#F8FAFC',
        
        // Day Mode (Logo-inspired)
        'day-bg': '#FFD6E5', // Pink from logo
        'day-surface': '#FFF0F5', // Lighter pink
        'day-accent': '#30C8E6', // Blue from logo
        'day-text': '#3E2723', // Dark brown from logo text
        'day-dark': '#654321', // brown from logo
        'day-light': '#F5F0E1', // Cream from logo (flour bag)
        'day-medium': '#FFA726', // Orange from logo
        'day-highlight': '#30C8E6', // Blue from logo
        'day-shadow': '#3E2723', // Dark brown from logo text
        
        // White Mode
        'white-bg': '#FFFFFF',
        'white-surface': '#F9FAFB',
        'white-accent': '#E5E7EB',
        'white-text': '#111827',
        
        // Logo background
        'logo-bg': '#FFD6E5', // Pink from logo
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'disabled', 'hover', 'focus'],
      textColor: ['dark', 'disabled'],
      borderColor: ['dark', 'disabled', 'focus'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      ringWidth: ['focus'],
      ringOffsetWidth: ['focus'],
      ringColor: ['focus'],
      borderOpacity: ['dark'],
      borderWidth: ['focus'],
    },
  },
  plugins: [],
}
