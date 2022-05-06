const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN })

exports.handler = async event => {
  try {
    const { results } = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: 'Visible',
            checkbox: {
                equals: true
            }
        },
        sorts: [
            {
                property: 'Date',
                direction: 'descending'
            }
        ]
    })
    const list = results.map(result => {
        return {
            label: result.properties.Label.title[0].plain_text,
            url: result.properties.URL.url
        }
    })
    return res(list)
  } catch (error) {
    return res(error, 500)
  }
}

const res = (body = {}, statusCode = 200) => {
  return { body: JSON.stringify(body), statusCode }
}
