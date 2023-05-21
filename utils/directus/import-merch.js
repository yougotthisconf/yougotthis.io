require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    const { data: folders } = await directus.items('directus_folders').readByQuery()
    const folder = folders.find(f => f.name == 'Merch').id
    let dirs = fs.readdirSync('content/merch')
    for(let dir of dirs) {
        let item = await fetch('http://localhost:3000/_content/merch/'+dir).then(r => r.json())
        if(!item.list) {
            item = item[0]
            const images = []
            for(let image of item.images) {
                const { id } = await directus.files.import({
                    url: `https://yougotthis.io${item.dir}/${image.name}`,
                    data: { 
                        folder, 
                        title: image.title, 
                        type: 'image/jpeg',
                        description: image.alt
                    }
                })
                console.log(`Imported image for ${item.title}: ${id}`)
                images.push(id)
            }
            const { title, description, price_gbp, attributes, links } = item
            const payload = {
                slug: dir,
                title, description, price_gbp, attributes, links,
                images: images.map(id => ({ directus_files_id: id })),
                body: item.body.children[0].children[0].value
            }
            await directus.items('merch').createOne(payload)
        }
    }
})();