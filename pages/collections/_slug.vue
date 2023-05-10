<template>
    <div class="wrapper md:grid md:grid-cols-3 gap-y-8 sm:gap-8 my-12">
        <div class="col-span-1">
            <div class="card box">
                <img :src="$asset(collection.cover)" alt="">
                <div class="meta">
                    <h1 :data-title="collection.title">{{ collection.title }}</h1>
                    <p>{{ collection.description }}</p>
                </div>
            </div>
            <div v-if="collection.sponsors.length > 0" class="my-8">
                <h2 class="font-heading mb-2 text-xl">Sponsored by</h2>
                <SponsorList :list="collection.sponsors" grid-class="grid-cols-2 gap-2" />
            </div>
            <div class="stats">
                <div class="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>{{ collection.items.length }} items</span>
                </div>
                <div class="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ duration }} total length</span>
                </div>
            </div>
        </div>
        <main class="col-span-2">
            <article v-if="collection.body" class="max-w-full prose lg:prose-lg" v-html="$md.render(collection.body)"></article>
            <div class="listing">
                <h2 v-if="collection.body" class="heading">All items in collection</h2>
                <ContentList :list="collection.items" grid-class="md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-6" />
            </div>
        </main>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ params, $directus }) {
    const itemFields = ['items.library_slug.slug', 'items.library_slug.title', 'items.library_slug.cover', 'items.library_slug.type', 'items.library_slug.duration']
    const itemPeopleFields = ['items.library_slug.people.people_slug.title', 'items.library_slug.people.people_slug.image']

    const collection = await $directus.items('collections').readOne(params.slug, { 
        fields: ['*', ...itemFields, ...itemPeopleFields, 'sponsors.sponsors_slug.*']
    })
    collection.items = collection.items.map(i => i.library_slug)
    collection.sponsors = collection.sponsors.map(s => s.sponsors_slug)

    let duration = collection.items.map(i => i.duration).reduce((a, b) => a + b, 0)
    duration = Math.floor(duration/60)+':'+ String(duration%60).padStart(2, '0')

    return { collection, duration }
  },
  head() {
    return headFactory({
      title: this.collection.title,
      description: this.collection.description,
      path: this.$route.path,
      image: this.$asset(this.collection.cover)
    })
  },
}
</script>

<style scoped>
.box {
    @apply mb-4;
}
.card {
    @apply flex flex-col p-0 w-full;
    & img {
        @apply rounded-t-md;
    }
    & .meta {
        @apply p-4 flex-1 flex flex-col justify-start;
    }
    & h1 {
        @apply font-heading text-theme-alt text-2xl md:text-3xl -mt-7 md:-mt-8;
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
.stats {
    @apply mb-4 space-y-2 flex flex-wrap items-center;
    & .stat {
        @apply flex items-center text-lg !mt-0 mr-4;
        & svg {
            @apply w-4 h-4 mr-1;
        }
    }
    &:last-child {
        @apply mr-0;
    }
}
</style>
