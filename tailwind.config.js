module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms')
  ],
  purge: {
    mode: 'all',
    content: ['./build/*.html', './build/**/*.html']
  },
  theme: {
    fontFamily: {
      'sans': ['Freigeist', 'sans-serif'],
      'display': ['"Freigeist Wide"', 'Freigeist', 'sans-serif']
    },
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    }
  }
}
