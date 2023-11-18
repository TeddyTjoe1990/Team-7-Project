/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages**.{js,jsx,tx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'olive-green': '#7D9763',
        'sandstone': '#D4B996',
        'brown': '#725D32',
        // Accent Colors
        'terracotta-orange': '#E67A2E',
        'cerulean-blue': '#4A90E2',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      // Custom Components and Utilities
      components: {
        // Header and Navigation
        '.header': {
          backgroundColor: 'var(--color-olive-green)',
        },
        '.nav-link': {
          color: 'var(--color-sandstone)',
          // Styling for navigation links
        },
        '.dropdown': {
          // Styles for dropdowns if we decide we need any
        },

        // Main Section
        '.main-section': {
          backgroundColor: '#ffffff', // White background, maybe change in the future to increase visual interest.
        },
        '.product-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          // Styles for the grid layout on the product listings page
        },
        '.control-menu': {
          // Possibly implement this in the future?
        },

        // Buttons and Call-to-Actions
        '.btn-orange': {
          backgroundColor: 'var(--color-terracotta-orange)',
        },
        '.btn-blue': {
          backgroundColor: 'var(--color-cerulean-blue)',
        },

        // Icons and Visual Elements
        '.artisan-icon': {
          //Implement this in the future for profile icons for artisans
        },

        // Footer
        '.footer': {
          backgroundColor: '#ffffff', // White background
          color: 'var(--color-brown)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
