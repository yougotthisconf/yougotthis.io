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
      'sans': ['Soehne', 'sans-serif'],
      'display': ['"Soehne Breit"', 'Soehne', 'sans-serif']
    },
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    }
  }
}
