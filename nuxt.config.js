import copyContentImages from './utils/copy-content-images.js'
copyContentImages()

export default {
  target: 'static',
  telemetry: false,
  components: [
    '~/components',
    '~/components/collections',
    '~/components/events',
    '~/components/global',
    '~/components/library',
    '~/components/one-off',
    '~/components/sponsors',
    '~/components/sponsors/articles',
    '~/components/people',
    '~/components/newsletter',
    '~/components/merch',
    '~/components/social-cards',
  ],
  head: {
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#e9194a' },
      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#e9194a' },
    ],
    link: [
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png' , href: '/icons/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png' , href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/site.webmanifest' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#e9194a' },
    ],
    script: [
      { src: 'https://player.vimeo.com/api/player.js' }
    ]
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/markdownit'
  ],
  plugins: [
    { src: '~/plugins/simple-analytics.js', mode: 'client' },
    { src: '~/plugins/html2canvas.js', mode: 'client' },
    { src: '~/plugins/directus.js'}
  ],
  moment: {
		timezone: true,
	},
  tailwindcss: {
    cssPath: '~/assets/style.css'
  },
  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  generate: {
    interval: 50
  }
}
