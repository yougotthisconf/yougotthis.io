import config from '../config'

export default function headFactory(meta = {}) {
  const title = meta.title ? `${meta.title} | ${config.title}` : config.title
  const description = meta.description || config.description
  const url = meta.path ? config.baseURL + meta.path : config.baseURL
  const image = meta.image ? meta.absolute ? meta.image : `${config.baseURL}${meta.path}/${meta.image}` : `${config.baseURL}${config.image}`

  return {
    title,
    meta: [
      // Primary
      {
        hid: 'title',
        name: 'title',
        content: title,
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },

      // Open Graph / Facebook
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: title
      },
      {
        hid: 'ogtype',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'ogurl',
        property: 'og:url',
        content: url
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: description
      },
      {
        hid: 'ogimage',
        property: 'og:image',
        content: image
      },

      // Twitter
      {
        hid: 'twcard',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twtitle',
        property: 'twitter:title',
        content: title
      },
      {
        hid: 'twdescription',
        property: 'twitter:description',
        content: description
      },
      {
        hid: 'twurl',
        property: 'twitter:url',
        content: url
      },
      {
        hid: 'twimage',
        property: 'twitter:image',
        content: image
      },
    ]
  }
}
