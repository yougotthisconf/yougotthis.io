<template>
    <div class="wrapper my-12" :class="item.type">
        <h1 class="heading text-center mb-12">{{ item.title }}</h1>
        <div class="md:grid md:grid-cols-3 gap-y-8 sm:gap-8 wrap">
            <aside>
                <div v-if="item.type === 'video'" class="box">{{ item.description_long }}</div>
                <img v-if="item.type === 'article'" class="cover" :src="`${$asset(item.cover)}?width=800`" alt="">

                <PeopleList :list="item.people" grid-class="grid-cols-1 gap-4 mb-4" :class="{ 'mt-8': item.type === 'article' }" />
                <section v-if="sponsors?.length > 0">
                    <h2>Sponsored by</h2>
                    <SponsorList :list="sponsors" grid-class="grid-cols-2 gap-2 mb-8" />
                </section>
                <section v-if="collections?.length > 0">
                    <h2>Related collections</h2>
                    <CollectionList :list="collections" grid-class="grid-cols-1 gap-4" />
                </section>
            </aside>
            <main>
                <iframe v-if="item.type === 'video'" :src="`https://player.vimeo.com/video/${item.vimeo}?h=44d49687ad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen class="w-full" style="aspect-ratio: 16/9"></iframe>
                <extra-reading v-if="item.summary" title="Summary" class="mt-8">
                    <div class="prose max-w-full mt-4" v-html="item.summary"></div>
                </extra-reading>
                <h2 v-if="item.type !== 'article' && item.body">Transcript</h2>
                <article class="max-w-full prose lg:prose-lg" v-html="item.body"></article>
            </main>
        </div>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $directus, params }) {
        const peopleFields = ['people.people_slug.slug', 'people.people_slug.title', 'people.people_slug.image']
        const collectionFields = ['slug', 'title', 'description', 'cover', 'sponsors.sponsors_slug.*']

        const item = await $directus.items('library').readOne(params.slug, { fields: ['*', ...peopleFields] })
        item.people = item.people.map(p => p.people_slug)

        const { data: collections } = await $directus.items('collections').readByQuery({ fields: collectionFields, filter: { items: { library_slug: { '_eq': params.slug } } }})

        let sponsors = collections.map(c => c.sponsors).flat().map(c => c.sponsors_slug)
        sponsors = sponsors.filter((v,i,a)=>a.findIndex(v2=>(v2.slug===v.slug))===i)

        return { item, collections, sponsors }
    },
    head() {
        return headFactory({
            title: this.item.title,
            description: this.item.description_short,
            path: this.$route.path,
            image: this.$asset(this.item.cover)
        })
    },
}
</script>

<style scoped>
.video .wrap {
   @apply flex flex-col-reverse md:grid;
}
aside {
    @apply lg:col-span-1 mb-4;
    & h2 {
        @apply font-heading text-xl mb-4 mt-8;
    }
    & .box {
        @apply mb-4;
    }
}
main {
    @apply md:col-span-2;
}
h2 {
    @apply mt-8 mb-4 font-heading text-xl;
}
.cover {
    @apply rounded-lg shadow-lg mb-4;
}
</style>
