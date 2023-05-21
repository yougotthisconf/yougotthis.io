require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    let dirs = fs.readdirSync('content/people')
    // dirs = dirs.splice(20, 100)
    const items = []
    for(let dir of dirs) {
        const [ item ] = await fetch('http://localhost:3000/_content/people/'+dir).then(r => r.json())
        const { id } = await directus.files.import({
            url: `https://yougotthis.io${item.dir}/${item.avatar}`,
            data: { title: item.title }
        })
        console.log(`Imported image for ${item.title}: ${id}`)
        items.push({ ...item, image: id, slug: item.dir.split('/')[2] })
    }
    const payload = items.map(item => {
        return {
            slug: item.slug,
            title: item.title,
            image: item.image,
            bio: item.bodyText,
            pronouns: item.pronouns ? item.pronouns : null,
            twitter: item.twitter ? item.twitter : null,
        }
    })
    const { data } = await directus.items('people').createMany(payload)
    console.log(data)
})();