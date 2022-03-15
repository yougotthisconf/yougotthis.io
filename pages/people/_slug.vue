<template>
    <!-- <div>Person page - list all content they've produced, bio, links, pronouns if we have them.</div> -->
    <div>
        <section class="top">
            <div class="max-w-3xl mx-auto p-4 pb-20">
                <img :src="`${person.dir}/${person.avatar}`" :alt="`Picture of ${person.name}`">
                <h1 class="heading">{{ person.name }}</h1>
                <nuxt-content :document="person" class="mt-6 mb-4"></nuxt-content>
                <a v-if="person.twitter" class="button bright mt-4" href="/about">@{{ person.twitter }} on Twitter</a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
            </svg>
        </section>
        <div class="wrapper py-12">
            <ContentList :list="content" grid-class="md:grid-cols-2 gap-6 lg:gap-8" />
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        // const person = await $content('people', { deep: true }).fetch()
        const [person] = await $content('people', { deep: true }).where({ dir: `/people/${params.slug}` }).fetch()
        const people = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()
        let content = await $content('library', { deep: true }).where({ people: { $contains: params.slug } }).without(['body']).fetch()

        content = content.map(item => {
            let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
            profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
            return { ...item, people: profiles }
        })

        // const collections = await $content('collections', { deep: true }).where({ items: { $contains: dir } }).without(['items', 'body']).fetch()

        // const allPeople = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()
        // const people = doc.people.map(docP => allPeople.find(allP => allP.dir.includes(docP)))

        // const allSponsors = await $content('sponsors', { deep: true }).fetch()
        // let sponsorList = []
        // sponsorList.push(...collections.map(c => c.sponsors).filter(a => a))
        // if(doc.sponsors) sponsorList.push([...doc.sponsors])
        // sponsorList = [...new Set(sponsorList.flat())]
        // const sponsors = sponsorList.map(s => allSponsors.find(t => t.dir.includes(s)))

        return { person, content }
    }
}
</script>

<style scoped>
.top {
    @apply text-center bg-white pt-8 md:pt-16;
    & img {
        @apply rounded-full border-2 border-theme-white mx-auto mb-8;
    }
}
</style>
