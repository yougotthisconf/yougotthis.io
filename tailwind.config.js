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
      'sans': ['Scilla', 'sans-serif'],
      'display': ['"Scilla Narrow"', 'Soehne', 'sans-serif']
    },
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    }
  }
}
