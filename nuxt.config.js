import config from './config'
import copyContentImages from './utils/copy-content-images.js'
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
    '~/components/sponsors',
    '~/components/people',
    '~/components/newsletter'
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
    '@nuxtjs/feed',
    '@nuxtjs/markdownit'
  ],
  moment: {
		timezone: true,
	},
  tailwindcss: {
    cssPath: '~/assets/style.css'
  },
  feed: [
    {
      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          title: config.title,
          description: config.description,
          link: config.baseURL + '/feed.xml'
        }
        const { $content } = require('@nuxt/content') // eslint-disable-line
        const items = await $content('library', { deep: true }).sortBy('date', 'desc').fetch();
        items.forEach(item => {
          const url = `${config.baseURL}/library/${item.slug}`;
          feed.addItem({
            title: item.title,
            id: url,
            link: url,
            description: item.descriptions.full,
            content: item.bodyText,
          });
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ], // this is the end of the feed settings
  hooks: {
    'content:file:beforeInsert': document => {
      const md = require('markdown-it')() // eslint-disable-line
      if (document.extension === '.md') {
        const mdToHtml = md.render(document.text) // eslint-disable-line
        document.bodyText = mdToHtml
      }
    },
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  // TODO: RSS
}
