<template>
    <div class="wrapper my-12">
        <h1 class="heading text-center mb-12">{{ doc.title }}</h1>
        <div class="md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
            <div class="col-span-1">
                <div class="people">
                    <n-link v-for="person in people" :key="person.dir" :to="person.dir" class="box">
                        <img :src="`${person.dir}/${person.avatar}`" :alt="`Picture of ${person.name}`" class="w-9">
                        <p>{{ person.name }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </n-link>
                </div>
                <div class="box">
                    <p>{{ doc.descriptions.full ? doc.descriptions.full : doc.descriptions.short }}</p>
                </div>
                <div>
                    <h2 class="font-heading text-xl mb-2 mt-8">Featured in</h2>
                    <CollectionList :list="collections" grid="grid-cols-1 gap-4" />
                </div>
                <div>
                    <h2 class="font-heading text-xl mb-2 mt-8">Sponsored by</h2>
                    <SponsorList :list="sponsors" grid="grid-cols-2 gap-2 mb-8" />
                </div>
            </div>
            <main class="col-span-2">
                <LibraryItem v-if="doc.vimeo" :path="documentPath" />
                <nuxt-content :document="doc" class="max-w-full prose lg:prose-lg mt-8"></nuxt-content>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const [doc] = await $content('library', { deep: true }).where({ slug: params.slug }).fetch()
        const documentPath = doc.path.split('/library/').join('')

        const collections = await $content('collections', { deep: true }).where({ items: { $contains: documentPath } }).without(['items', 'body']).fetch()

        const allPeople = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()
        const people = doc.people.map(docP => allPeople.find(allP => allP.dir.includes(docP)))

        const allSponsors = await $content('sponsors', { deep: true }).fetch()
        let sponsorList = []
        sponsorList.push(...collections.map(c => c.sponsors).filter(a => a))
        if(doc.sponsors) sponsorList.push([...doc.sponsors])
        sponsorList = [...new Set(sponsorList.flat())]
        const sponsors = sponsorList.map(s => allSponsors.find(t => t.dir.includes(s)))

        return { doc, collections, people, sponsors, documentPath }
    }
}
</script>

<style scoped>
.box {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow;
    @apply block mb-4 p-4 w-full;
}
.people {
    & a {
        @apply flex items-center justify-start space-x-2;
        @apply pr-6;
        @apply transition;
        &:hover {
            @apply transition shadow-lg;
            transform: translate(0, -2px);
        }
        &:active {
            @apply transition shadow-none;
            transform: translate(2px, 2px);
        }
    }
    & img {
        @apply rounded-full border-2 border-white;
    }
    & svg {
        @apply w-4 h-4 !ml-auto;
    }
}
</style>
