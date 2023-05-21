require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    try {

        const base = 'content/library/videos'
        const { data: folders } = await directus.items('directus_folders').readByQuery()
        const folder = folders.find(f => f.name == 'Library').id
        let dirs = fs.readdirSync(base)
        dirs = dirs.map(dir => {
            let subdirs = fs.readdirSync(base + '/' + dir)
            return subdirs.map(subdir => dir + '/' + subdir)
        })
        let files = dirs.flat().map(f => base + '/' + f)
        const items = []
        for(let file of files) {
            const path = file.split('.')[0]
            const slug = file.split('/')[4].split('.')[0]
            const item = await fetch('http://localhost:3000/_' + path).then(r => r.json())
            const { id: cover } = await directus.files.import({
                url: item.cover + '.jpg',
                data: { ...item, folder, slug, type: 'image/jpeg' }
            })
            
            console.log(`UPLOAD ${item.title}`)
            
            await directus.items('library').createOne({
                slug: slug,
                status: 'published',
                date: item.date,
                type: 'video',
                title: item.title,
                people: item.people.map(p => ({ people_slug: p })),
                cover: cover,
                duration: item.duration,
                description_short: item.descriptions.short,
                description_long: item.descriptions.full ? item.descriptions.full : null,
                vimeo: item.vimeo ? item.vimeo : null,
                body: item.bodyText
            })
            
            console.log(`CREATE ${item.title}`)
        }
    } catch(error) {
        console.log(error)
    }
})();