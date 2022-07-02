<template>
    <div class="wrapper my-12">
        <h1 class="heading text-center mb-12">{{ doc.title }}</h1>
        <LayoutVideo v-if="doc.vimeo" :doc="doc" :collections="collections" :people="people" :sponsors="sponsors" :dir="dir" />
        <LayoutArticle v-if="doc.type == 'article'" :doc="doc" :collections="collections" :people="people" :sponsors="sponsors" :dir="dir" />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $content, params }) {

        const content = await $content('library', { deep: true }).fetch()

        const doc = content.find(item => item.path.includes(params.slug))

        let dir = doc.path.split('/library/').join('')
        if(dir.substr(dir.length-6) === '/index') dir = dir.substring(0, dir.length-6)

        const collections = await $content('collections', { deep: true }).where({ items: { $contains: dir } }).sortBy('highlight', 'desc').without(['items', 'body']).fetch()

        const allPeople = await $content('people', { deep: true }).fetch()
        const people = doc.people.map(docP => allPeople.find(allP => allP.dir.includes(docP)))

        const allSponsors = await $content('sponsors', { deep: true }).fetch()
        let sponsorList = []
        sponsorList.push(...collections.map(c => c.sponsors).filter(a => a))
        if(doc.sponsors) sponsorList.push([...doc.sponsors])
        sponsorList = [...new Set(sponsorList.flat())]
        const sponsors = sponsorList.map(s => allSponsors.find(t => t.dir.includes(s)))

        return { doc, collections, people, sponsors, dir }
    },
    head() {
        return headFactory({
            title: this.doc.title,
            description: this.doc.descriptions.short,
            path: this.$route.path,
            imageDir: this.doc.path.split('/index').join(''),
            image: this.doc.cover,
            absolute: !!this.doc.vimeo
        })
    },
}
</script>
