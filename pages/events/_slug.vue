<template>
    <div class="wrapper my-12 md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
        <aside>
            <img :src="`${event.dir}/${event.cover}`" alt="">
            <h1>{{ event.title }}</h1>
            <p>{{ event.description }}</p>

            <EventMeta :event="event" />

            <pre v-if="sponsors.length > 0">{{ sponsors.map(s => s.name) }}</pre>
        </aside>
        <main>
            <nuxt-content :document="event" class="max-w-full prose lg:prose-lg" />
        </main>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const event = await $content('events', params.slug, 'index').fetch()
        const sponsors = event.sponsors ? await $content('sponsors', { deep: true }).where({'dir': {'$in': event.sponsors.map(s => `/sponsors/${s}`)}}).fetch() : []
        return { event, sponsors }
    }
}

// redirect if url is present
// if save_the_date = true, just put up newsletter link
// otherwise, load page like delta
</script>

<style scoped>
aside {
    @apply lg:col-span-1;
}
main {
    @apply md:col-span-2;
}
</style>
