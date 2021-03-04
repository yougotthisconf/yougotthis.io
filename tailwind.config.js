module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
  purge: {
    mode: 'all',
    content: ['./build/*.html', './build/**/*.html']
  },
  theme: {
    fontFamily: {
      'sans': ['Freigeist', 'sans-serif'],
      'display': ['"Freigeist Wide"', 'Freigeist', 'sans-serif']
    }
  },
  darkMode: 'class'
}
