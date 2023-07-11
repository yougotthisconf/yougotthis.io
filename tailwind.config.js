const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './content/**/*',
    './components/**/*',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          main: '#e9194a',
          light: '#FF6E75',
          dark: '#C4050F',
          black: '#331717',
          white: '#f1f1e7',
          alt: '#3e1864'
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
