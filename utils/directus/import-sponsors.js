require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    const { data: folders } = await directus.items('directus_folders').readByQuery()
    const folder = folders.find(f => f.name == 'Sponsors').id
    let dirs = fs.readdirSync('content/sponsors')
    const items = []
    for(let dir of dirs) {
        const [ item ] = await fetch('http://localhost:3000/_content/sponsors/'+dir).then(r => r.json())
        const { id: image } = await directus.files.import({
            url: `https://yougotthis.io${item.dir}/${item.file}`,
            data: { title: item.title, folder }
        })
        console.log(`Imported image for ${item.title}: ${image}`)
        items.push({ ...item, image: image, id: dir })
    }
    const payload = items.map(item => {
        return {
            slug: item.id,
            title: item.title,
            file: item.image,
            url: item.url,
            feature: item.feature ? item.feature : false,
            current: item.current ? item.current : false,
        }
    })
    const { data } = await directus.items('sponsors').createMany(payload)
    console.log(data)
})();