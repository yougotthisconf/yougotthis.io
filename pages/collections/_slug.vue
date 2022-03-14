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
            <div v-if="sponsors && sponsors.length > 0" class="box">
                <h2 class="font-heading mb-2 -mt-2 text-lg">Sponsored by</h2>
                <SponsorList :list="sponsors" grid="grid-cols-2 gap-2" />
            </div>
            <div class="meta">
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
                <div class="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{{ $moment(collection.date).format('MMM Do YYYY') }}</span>
                </div>
            </div>
        </div>
        <main class="col-span-2">
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
    const allSponsors = await $content('sponsors', { deep: true }).fetch()

    let items = fullLibrary.filter(libItem => collection.items.find(colItem => libItem.path.includes(colItem)))
    items = items.map(item => ({ ...item, type: item.vimeo ? 'video' : 'article'}))
    items = items.map(item => {
        let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
        profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
        return { ...item, people: profiles }
    })

    const sponsors = allSponsors.filter(sponsor => collection.sponsors.find(name => sponsor.path.includes(name)))

    const { duration: minutes } = items.reduce((a, b) => ({duration: a.duration + b.duration}))
    const duration = Math.floor(minutes/60)+':'+ String(minutes%60).padStart(2, '0');

    return { collection, items, duration, sponsors }
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
.meta {
    @apply mb-4 space-y-2;
    & .stat {
        @apply flex items-center;
        & svg {
            @apply w-4 h-4 mr-1;
        }
    }
}
</style>
