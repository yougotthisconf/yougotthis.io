const fs = require('fs')
const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_YGT_DB_KEY })

if (!fs.existsSync('utils/tmp')) fs.mkdirSync('utils/tmp')
const time = new Date().toISOString()

notion.databases.query({
  database_id: process.env.NOTION_YGT_DB_ID
}).then(data => {
  const d = data.results.map(s => s.properties)
  
  const sessions = d.map(s => ({
    title: s.title.formula.string,
    pronouns: s.Pronouns.rollup.array[0]?.rich_text[0].plain_text.toLowerCase(),
    speakers: [s['Speaker Name'].rollup.array[0]?.title[0].plain_text.toLowerCase().split(' ').join('-')],
    start: s.Start.date.start,
    description: s.Description.rollup.array[0]?.rich_text[0].plain_text
  })).sort((a, b) => new Date(a.start) - new Date(b.start))
  
  let toWrite = []

  for(let session of sessions) {
    // Start Edge Case Fixes
    if(session.speakers[0] == 'taryn-musgrave-&-ramón-huidobro') session.speakers = ['taryn-musgrave', 'ramon-huidobro']
    // End Edge Case Fixes

    if(session.speakers[0]) {
      toWrite.push(`
<event-session 
  title="${session.title}"
  start="${session.start}" 
  speakers='${JSON.stringify(session.speakers)}'
  description="${session.description}">
</event-session>`)
    } else {
      toWrite.push(`
<event-session 
  title="${session.title}"
  start="${session.start}">
</event-session>`)
    }

    fs.writeFileSync(`utils/tmp/notion-generate-schedule-${time}.txt`, toWrite.join('\n'))
  }
})