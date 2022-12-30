const fs = require('fs')
const path = require('path')
const request = require('request')
const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_YGT_DB_KEY })

const time = new Date().toISOString()
if (!fs.existsSync('utils/tmp')) fs.mkdirSync('utils/tmp')

notion.databases.query({
  database_id: process.env.NOTION_YGT_DB_ID
}).then(async data => {
  const sessions = data.results
    .map(s => s.properties)
    .sort((a, b) => new Date(a.Start.date.start) - new Date(b.Start.date.start))
    .map(s => {
      function addTime(date, unit, amount) {
        const d = new Date(date)
        if(unit == 'h') d.setHours(d.getHours() + amount)
        if(unit == 'm') d.setMinutes(d.getMinutes() + amount)
        const str = d.toTimeString().split(':').slice(0, 2).join(':')
        return {
          date: d,
          str: str
        }
      }

      const startString = s.Start.date.start
      const start = addTime(startString)
      const startQs = addTime(startString, 'm', 25)
      const end = addTime(startString, 'm', 40)
      const times = [
        {
          label: 'EST',
          start: addTime(startString, 'h', -5),
          startQs: addTime(startQs.date, 'h', -5),
          end: addTime(end.date, 'h', -5),
        },
        {
          label: 'GMT',
          start, startQs, end
        },
        {
          label: 'CEST',
          start: addTime(startString, 'h', 1),
          startQs: addTime(startQs.date, 'h', 1),
          end: addTime(end.date, 'h', 1),
        },
        {
          label: 'IST',
          start: addTime(addTime(startString, 'h', 4).date, 'm', 30),
          startQs: addTime(addTime(startQs.date, 'h', 4).date, 'm', 30),
          end: addTime(addTime(end.date, 'h', 4).date, 'm', 30),
        },
      ]
      // const timesString = times.map(t => (`[${t.label}] Start: ${t.start.str}. Q&A: ${t.startQs.str}. End: ${t.end.str}`)).join('\n')

      const speakers = [s['Speaker Name'].rollup.array[0]?.title[0].plain_text]
      const bios = [s['Speaker Bio'].rollup.array[0]?.rich_text[0]?.plain_text]
      return {
        title: s.title.formula.string,
        pronouns: s.Pronouns.rollup.array[0]?.rich_text[0].plain_text.toLowerCase(),
        speakers: speakers[0],
        bios: bios,
        talk: !!speakers[0],
        description: s.Description.rollup.array[0]?.rich_text[0].plain_text,
        host: s.Host?.select?.name,
        times,
        tz: s.TZ?.select?.name,
        // timesString
      }
    })
// [${time.label}] Start: ${time.start.str}. Q&A: ${time.startQs.str}. End: ${time.end.str}
  let content = `
`
  for(let s of sessions) {
    const time = s.times.find(r => r.label == s.tz)
    // console.log(s.times, s.tz)
    content += `
## ${s.title}
Start: ${time.start.str} ${time.label}
`
if(s.talk) {
  content += `Host: ${s.host}

1. Introduce speakers: ${s.speakers} ${s.pronouns}.<br>${s.bios}

2. Introduce talk.<br>${s.description}

3. Talk should end at ${time.startQs.str} ${time.label} and questions start. This is flexible.

4. Section must end at ${time.end.str} ${time.label}. Thank speakers and move on.
`
}
  }


await fs.promises.writeFile(`utils/tmp/guide.md`, content)
})
