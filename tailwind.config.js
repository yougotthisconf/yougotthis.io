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
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    }
  }
}
