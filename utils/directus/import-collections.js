require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    try {
        const base = 'content/collections'
        const { data: folders } = await directus.items('directus_folders').readByQuery()
        const folder = folders.find(f => f.name == 'Collections').id
        let dirs = fs.readdirSync(base)
        let files = dirs.flat().map(f => 'collections/' + f)
        for(let file of files) {
            const slug = file.split('collections/')[1]
            const [item] = await fetch('http://localhost:3000/_content/' + file).then(r => r.json())
            
            const rawFile = fs.readFileSync(`${base}/${slug}/index.md`, 'utf8')
            const segments = rawFile.split('---\n\n')
            let body = segments.length > 1 ? segments[1] : ''
            const replacementString = '<div data-library="$1"></div>'
            const regexPattern = /<library-item\s+path="[^\/]+\/[^\/]+\/([^"]+)"\s*><\/library-item>/g
            body = body.replace(regexPattern, replacementString)
            body = body.replace(/(\r\n|\n|\r)/m,"")

            const { id: cover } = await directus.files.import({
                url: `https://yougotthis.io/${file}/${item.cover}`,
                data: { ...item, folder, type: 'image/jpeg' }
            })
            
            console.log(`UPLOAD ${item.title}`)

            const payload = {
                slug: slug,
                status: 'published',
                is_event: item.type == 'event',
                date: item.date,
                highlight: item.highlight ? item.highlight : null,
                title: item.title,
                description: item.description,
                cover: cover,
                items: item.items.map(it => ({ library_slug: it.split('/').at(-1) })),
                sponsors: item.sponsors ? item.sponsors.map(s => ({ sponsors_slug: s })) : null,
                body: body
            }
            
            await directus.items('collections').createOne(payload)
            
            console.log(`CREATE ${item.title}`)
        }
    } catch(error) {
        console.dir(error.errors, { depth: null })
    }
})();