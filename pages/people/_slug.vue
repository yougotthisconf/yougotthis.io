<template>
    <div>
        <section class="top">
            <div class="max-w-3xl mx-auto p-4 pb-20">
                <img :src="`${$asset(person.image)}`" :alt="`Picture of ${person.title}`" class="w-24">
                <h1 class="heading">
                    <span>{{ person.title }}</span>
                    <span v-if="person.pronouns" class="pronouns">({{ person.pronouns }})</span>
                </h1>
                <article v-if="person.bio" class="mt-6 mb-4" v-html="person.bio"></article>
                <a v-if="person.twitter" class="button bright mt-4" :href="`https://twitter.com/${person.twitter}`">@{{ person.twitter }} on Twitter</a>
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
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $directus, params }) {
        const person = await $directus.items('people').readOne(params.slug)
        const { data: content } = await $directus.items('library').readByQuery({
            filter: { people: { people_slug: { '_eq': params.slug } } },
            sort: '-date',
            fields: ['slug', 'title', 'cover', 'type', 'duration', 'people.people_slug.title', 'people.people_slug.image']
        })
        return { person, content }
    },
    head() {
        return headFactory({
            title: this.person.title,
            path: this.$route.path
        })
    },
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
