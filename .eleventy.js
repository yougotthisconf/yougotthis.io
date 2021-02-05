const htmlmin = require("html-minifier");
const jsonminify = require("jsonminify");

module.exports = function (config) {
  config.setQuietMode(true)

  config.addPassthroughCopy('src/assets/img')
  config.addPassthroughCopy('src/assets/js')
  config.addPassthroughCopy('src/assets/fonts')
  config.addPassthroughCopy('src/_redirects')

  config.addCollection('talks', collection => {
    return collection.getFilteredByTag('talk').sort((a, b) => {
      const A = a.data.talk.title
      const B = b.data.talk.title
      if (A > B) return 1
      else if (A < B) return -1
      else return 0
    })
  })

  config.addCollection('rss', collection => {
    return collection
      .getFilteredByTag('talk')
      .map(t => {
        return {
          data: {
            ...t.data,
            talk: {
              ...t.data.talk,
              abstract: t.data.talk.abstract.split('<br />').join(' ')
            },
            pubDate: t.data.date.toUTCString()
          }
        }
      })
      .sort((a, b) => {
        const A = a.data.date
        const B = b.data.date
        if (A < B) return 1
        else if (A > B) return -1
        else return 0
      })
  })

  config.addCollection('tagList', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags.filter(tag => !['post', 'all'].includes(tag)).forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })

  config.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: true
      })
    } else {
      return content
    }
  })

  config.addTransform('json-beautify', (content, outputPath) => {
    if (outputPath.endsWith('.json')) {
      const m = jsonminify(content)
      const c = m.lastIndexOf(',')
      return m.substring(0, c) + m.substring(c + 1, m.length)
    } else {
      return content
    }
  })

  return {
    dir: {
      input: './src',
      output: './build',
      includes: '_includes',
      layouts: '_layouts'
    },
    passthroughFileCopy: true
  }
};
