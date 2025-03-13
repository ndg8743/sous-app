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
        // Original colors
        'sous-primary': '#4F46E5',
        'sous-primary-dark': '#4338CA',
        'sous-secondary': '#6B7280',
        'sous-accent': '#C8A27C', // Light brown accent color
        'sous-background': '#F3F4F6',
        'sous-success': '#10B981',
        'sous-error': '#EF4444',
        
        // Dark Mode (Black)
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-text': '#FFFFFF',
        
        // Night Mode (Current Dark Mode - Blue-based)
        'night-bg': '#1E293B',
        'night-surface': '#334155',
        'night-text': '#F8FAFC',
        
        // Day Mode (Earth Brown) - Enhanced with more browns
        'day-bg': '#E6CCB2', // Darker brown background
        'day-surface': '#D5BDAF', // Slightly darker surface
        'day-accent': '#A98467',
        'day-text': '#2D2424',
        'day-dark': '#8B5E34',
        'day-light': '#E6CCB2',
        'day-medium': '#C8A27C',
        'day-highlight': '#B68D5F',
        'day-shadow': '#7D5A44',
        
        // White Mode
        'white-bg': '#FFFFFF',
        'white-surface': '#F9FAFB',
        'white-accent': '#E5E7EB',
        'white-text': '#111827',
        
        // Logo background
        'logo-bg': '#D5BDAF',
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
