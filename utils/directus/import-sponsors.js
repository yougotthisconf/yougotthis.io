require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    let dirs = fs.readdirSync('content/sponsors')
    // dirs = dirs.splice(20, 100)
    const items = []
    for(let dir of dirs) {
        const [ item ] = await fetch('http://localhost:3000/_content/sponsors/'+dir).then(r => r.json())
        const { id } = await directus.files.import({
            url: `https://yougotthis.io${item.dir}/${item.file}`,
            data: { title: item.title }
        })
        console.log(`Imported image for ${item.title}: ${id}`)
        items.push({ ...item, image: id })
    }
    const payload = items.map(item => {
        return {
            title: item.title,
            image: item.image,
            url: item.url,
            feature: item.feature ? item.feature : false,
            current: item.current ? item.current : false,
        }
    })
    const { data } = await directus.items('sponsors').createMany(payload)
    console.log(data)
})();