const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_YGT_DB_KEY })

async function getLinks() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_YGT_DB_BIOS,
    filter: { property: 'Visible', checkbox: { equals: true }},
    sorts: [{ property: 'Date', direction: 'descending' }]
  })
  const list = results.map(result => ({
    label: result.properties.Label.title[0].plain_text,
    url: result.properties.URL.url
  }))
  return list
}

exports.handler = async event => {
  try {
    const links = await getLinks()
    return res(links)
  } catch (error) {
    return res(error, 500)
  }
}

const res = (body = {}, statusCode = 200) => {
  return { body: JSON.stringify(body), statusCode }
}
