const fs = require('fs')
const path = require('path')
const request = require('request')
const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_YGT_DB_KEY })

const time = new Date().toISOString()
if (!fs.existsSync('utils/tmp')) fs.mkdirSync('utils/tmp')
fs.mkdirSync(`utils/tmp/${time}`)

notion.databases.query({
  database_id: process.env.NOTION_YGT_DB_ID
}).then(async data => {
  const d = data.results.map(s => s.properties).filter(s => s['Speaker Name'].rollup.array.length)
  
  const people = d.map(s => ({
    title: s['Speaker Name'].rollup.array[0].title[0].plain_text,
    pronouns: s.Pronouns.rollup.array[0]?.rich_text[0].plain_text.toLowerCase(),
    bio: s['Speaker Bio'].rollup.array[0].rich_text[0].plain_text,
    avatar: `avatar${path.extname(s['Image URL'].rollup.array[0].formula.string)}`,
    url: s['Image URL'].rollup.array[0].formula.string
  }))
  
  for(let person of people) {
    // Start Edge Case Fixes
    if(person.title.includes('Taryn')) person.title = 'Taryn Musgrave'
    // End Edge Case Fixes
    const path = `utils/tmp/${time}/${person.title.toLowerCase().split(' ').join('-')}`
    await fs.promises.mkdir(path)
    const content = `---
title: ${person.title}
pronouns: ${person.pronouns}
avatar: ${person.avatar}
---

${person.bio}
`

    await fs.promises.writeFile(path + '/index.md', content)
    await download(person.url, `${path}/${person.avatar}`)
    console.log(`${person.title} Completed`)
  }
})

function download(uri, filename, callback) {
  return new Promise((resolve, reject) => {
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', d => resolve(d));
    });
  })
};