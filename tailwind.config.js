const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './content/**/*'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          main: '#e9194a',
          light: '#FF6E75',
          dark: '#C4050F',
          black: '#331717',
          white: '#f1f1e7'
        }
      },
      fontFamily: {
        heading: ['knicknack', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-text-fill-stroke')(),
    require('@tailwindcss/typography'),
  ],
}
