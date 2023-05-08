require('dotenv').config();
const fs = require('fs');
const fetch = require('cross-fetch');
const { Directus } = require('@directus/sdk');
const directus = new Directus(process.env.DIRECTUS_URL, { auth: { staticToken: process.env.DIRECTUS_TOKEN } });

(async () => {
    try {
        const base = 'content/events'
        const { data: folders } = await directus.items('directus_folders').readByQuery()
        const folder = folders.find(f => f.name == 'Events').id
        const dirs = fs.readdirSync(base)
        for(let dir of dirs) {
            console.log(dir)
            const [item] = await fetch('http://localhost:3000/_content/events/' + dir).then(r => r.json())

            const fileType = item.cover.split('.')[1] == 'png' ? 'image/png' : 'image/jpeg'
            const { id: cover } = await directus.files.import({
                url: `https://yougotthis.io/events/${dir}/${item.cover}`,
                data: { ...item, folder, type: fileType }
            })
            
            console.log(`UPLOAD ${item.title}`)
            
            await directus.items('events').createOne({
                cover,
                slug: dir,
                title: item.title,
                description: item.description,
                start: item.start,
                end: item.end ? item.end : null,
                redirect_url: item.url ? item.url : null,
                location: item.location,
                is_past: item.past,
                save_the_date: item.save_the_date ? true : false,
                type: item.type
            })
            
            console.log(`CREATE ${item.title}`)
        }
    } catch(error) {
        console.log(error)
    }
})();