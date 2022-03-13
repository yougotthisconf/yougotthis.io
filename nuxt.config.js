const copyContentImages = require('./utils/copy-content-images.js')
copyContentImages()

export default {
  target: 'static',
  components: [
    '~/components',
    '~/components/collections',
    '~/components/events',
    '~/components/global',
    '~/components/library',
    '~/components/one-off',
    '~/components/sponsors'
  ],
  head: {
    title: 'You Got This!',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://player.vimeo.com/api/player.js' }
    ]
  },
  css: [],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],
  axios: {},
  content: {},
  tailwindcss: {
    cssPath: '~/assets/style.css'
  },
  build: {}
}
