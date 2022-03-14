<template>
    <div class="wrapper grid sm:grid-cols-3 gap-y-8 sm:gap-8 my-12">
        <div class="col-span-1">
            <div class="card box">
                <img :src="`${collection.dir}/${collection.cover}`" alt="">
                <div class="meta">
                    <h1 :data-title="collection.title">{{ collection.title }}</h1>
                    <p>{{ collection.description }}</p>
                </div>
            </div>
            <div class="box">
                <h2>Sponsors</h2>
                <ul class="list-disc pl-4">
                    <li v-for="sponsor in collection.sponsors" :key="sponsor">{{sponsor}}</li>
                </ul>
            </div>
        </div>
        <main class="col-span-2">
            <div class="meta">
                <span>{{ collection.items.length }} items</span>
                <span>{{ duration }} minutes</span>
                <span>{{ $moment(collection.date).format('MMM Do YYYY') }} updated</span>
            </div>
            <article>
                <nuxt-content :document="collection" class="prose lg:prose-lg"></nuxt-content>
            </article>
            <div class="listing">
                <h2 v-if="collection.body.children.length > 0" class="heading">All items in collection</h2>
                <ContentList :list="items" grid="md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-6" />
            </div>
        </main>
    </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const collection = await $content('collections', params.slug, 'index').fetch()
    const fullLibrary = await $content('library', { deep: true }).without(['body']).fetch()
    const people = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()

    let items = fullLibrary.filter(libItem => collection.items.find(colItem => libItem.path.includes(colItem)))

    items = items.map(item => ({ ...item, type: item.vimeo ? 'video' : 'article'}))

    items = items.map(item => {
        let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
        profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
        return { ...item, people: profiles }
    })

    const { duration } = items.reduce((a, b) => ({duration: a.duration + b.duration}))

    return { collection, items, duration }
  },
}
</script>

<style scoped>
.box {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow mb-4 p-4;
}
.card {
    @apply flex flex-col p-0;
    & img {
        @apply rounded-t-md;
    }
    & .meta {
        @apply p-4 flex-1 flex flex-col justify-start;
    }
    & h1 {
        @apply font-heading text-theme-main text-2xl md:text-3xl -mt-7 md:-mt-8;
        transform: translate3d(0,0,0) rotate(0);
        &:before {
            @apply absolute;
            content: attr(data-title);
            -webkit-text-stroke: 0.4em white;
            z-index: -1;
        }
    }
    & p {
        @apply mt-2 md:mt-4;
    }
}
article {
    @apply mb-8;
}
.listing h2 {
    @apply text-theme-main mb-4
}
main .meta {
    @apply mb-4 space-x-4;
}
</style>
