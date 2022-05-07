<template>
    <div>
        <section class="top">
            <div class="max-w-3xl mx-auto p-4 pb-20">
                <img :src="`${person.dir}/${person.avatar}`" :alt="`Picture of ${person.title}`" class="w-24">
                <h1 class="heading">
                    <span>{{ person.title }}</span>
                    <span v-if="person.pronouns" class="pronouns">({{ person.pronouns }})</span>
                </h1>
                <nuxt-content :document="person" class="mt-6 mb-4"></nuxt-content>
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
    async asyncData({ $content, params }) {
        const person = await $content('people', params.slug, 'index').fetch()
        const people = await $content('people', { deep: true }).only(['title', 'avatar', 'dir']).fetch()
        let content = await $content('library', { deep: true }).where({ people: { $contains: params.slug } }).without(['body']).fetch()

        content = content.map(item => {
            let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
            profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
            return { ...item, people: profiles }
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
