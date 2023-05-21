<template>
    <div>
        <div class="wrapper pt-16 mb-16">
            <h1 class="heading text-center">Library</h1>
            <p class="text-center mt-4">We have loads of free content to help you improve your core skills. Available for free forever without ads or login.</p>
            <ContentList :list="aboveFold" class="mt-8" />
        </div>

        <div class="bg-theme-main text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path transform="scale(1, -1) translate(0, -100)"  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
            </svg>
            <div class="wrapper py-16 text-center">
                <h2 class="heading">Check out our collections!</h2>
                <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
                <CollectionList :list="collections" collection-class="last:hidden lg:last:block" />
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
    async asyncData({ $directus }) {

        let { data: { collections } } = await $directus.items('featured').readByQuery({
            fields: ['collections.item.slug', 'collections.item.title', 'collections.item.description', 'collections.item.cover']
        })
        collections = collections.map(c => c.item)

        const { data: content } = await $directus.items('library').readByQuery({ 
            limit: -1,
            sort: '-date',
            fields: ['slug', 'title', 'cover', 'type', 'duration', 'people.people_slug.title', 'people.people_slug.image']
        })

        return { content, collections }
    },
    head() {
        return headFactory({
            title: 'Library',
            path: this.$route.path
        })
    },
    computed: {
        aboveFold() {
            return this.content.slice(0, 12)
        },
        belowFold() {
            return this.content.slice(12, this.content.length)
        }
    },
    created() {
        console.log(`${this.content.length} items loaded`) // eslint-disable-line no-console
    },
}
</script>

<style scoped>
.filters {
    @apply flex flex-col md:flex-row mt-4;
    & input {
        @apply w-full;
        @apply text-theme-black;
    }
    & select {
        @apply outline-pink-500;
    }
}
.no-results {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow;
    @apply mb-4 p-4 w-full;
}
</style>
