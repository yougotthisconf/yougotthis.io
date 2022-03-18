<template>
    <div class="wrapper my-12">
        <h1 class="heading text-center mb-12">{{ doc.title }}</h1>
        <LayoutVideo v-if="doc.vimeo" :doc="doc" :collections="collections" :people="people" :sponsors="sponsors" :dir="dir" />
        <!-- TODO: LayoutArticle -->
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $content, params }) {
        const [doc] = await $content('library', { deep: true }).where({ slug: params.slug }).fetch()
        const dir = doc.path.split('/library/').join('')

        const collections = await $content('collections', { deep: true }).where({ items: { $contains: dir } }).sortBy('highlight', 'desc').without(['items', 'body']).fetch()

        const allPeople = await $content('people', { deep: true }).only(['title', 'avatar', 'dir']).fetch()
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
            image: this.doc.cover,
            absolute: true
        })
    },
}
</script>
