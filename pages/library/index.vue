<template>
    <div>
        <div class="wrapper pt-16 mb-16">
            <h1 class="heading text-center">Library</h1>
            <div class="filters">
                <div class="search">
                    <input v-model="query" type="text" placeholder="Type to filter" class="text-input">
                </div>
            </div>

            <ContentList :list="aboveFold" class="mt-8" />

            <div v-if="aboveFold.length === 0" class="no-results">
                <p>No results. We search titles, descriptions, and speaker names. If there's a topic you would like to cover, let us know!</p>
            </div>
        </div>

        <div class="bg-theme-main text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path transform="scale(1, -1) translate(0, -100)"  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
            </svg>

            <div class="wrapper py-16 text-center">
                <h2 class="heading">Check out our collections!</h2>
                <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
                <CollectionList :list="collections" collection-class="lg:last:hidden" />
                <n-link class="button mt-8 grid-rows-1" to="/collections">See all collections</n-link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
            </svg>
        </div>

        <div class="wrapper py-16">
            <ContentList :list="belowFold" />
        </div>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
    async asyncData({ $content }) {
        let content = await $content('library', { deep: true }).without(['body']).sortBy('date', 'desc').fetch()
        const collections = await $content('collections', { deep: true }).without(['body']).where({ type: { $ne: 'event' } }).sortBy('highlight', 'desc').sortBy('date', 'desc').limit(4).fetch()
        const people = await $content('people', { deep: true }).only(['title', 'avatar', 'dir']).fetch()

        content = content.map(item => {
            let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
            profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
            return { ...item, people: profiles }
        })

        return { content, collections }
    },
    data() {
        return {
            query: ''
        }
    },
    head() {
        return headFactory({
            title: 'Library',
            path: this.$route.path
        })
    },
    computed: {
        search() {
            const l = this.content
            if(this.query) {
                const q = this.query.toLowerCase()
                const results = []
                results.push(...l.filter(i => i.title.toLowerCase().includes(q)))
                results.push(...l.filter(i => i.people.map(p => p.title.toLowerCase()).join(', ').includes(q)))
                results.push(...l.filter(i => i.descriptions.short.toLowerCase().includes(q)))
                results.push(...l.filter(i => i.descriptions.full.toLowerCase().includes(q)))
                return [...new Set(results)]
            }
            return l
        },
        aboveFold() {
            return this.search.slice(0, 12)
        },
        belowFold() {
            return this.search.slice(12, this.search.length)
        }
    },
    watch: {
        'query'(query) {
            const params = new URLSearchParams(location.search)
            params.set('query', query)
            params.toString()
            window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`)
        },
    },
    created() {
        if (this.$route.query.query) this.query = this.$route.query.query
    },
}
</script>

<style scoped>
.search {
    @apply flex justify-center mt-4;
    & input {
        @apply w-full;
        @apply md:w-64;
        @apply text-theme-black;
    }
}
.no-results {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow;
    @apply mb-4 p-4 w-full;
}
</style>
