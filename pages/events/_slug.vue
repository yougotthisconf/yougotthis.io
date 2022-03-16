<template>
    <div class="wrapper my-12 md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
        <aside>
            <div class="details">
                <img :src="`${event.dir}/${event.cover}`" alt="" class="rounded">
                <h1 :data-title="event.title">{{ event.title }}</h1>
                <p v-if="event.description">{{ event.description }}</p>

                <EventMeta :event="event" />

                <a v-if="event.link" :href="event.link.url" class="button bright link">{{ event.link.text }}</a>

                <h2 v-if="sponsors.length > 0">Sponsored by</h2>
                <SponsorList :list="sponsors" grid-class="grid-cols-2 gap-2 mb-8" />
            </div>
        </aside>
        <main>
            <nuxt-content v-if="!event.save_the_date" :document="event" class="max-w-full prose lg:prose-lg" />
            <div v-if="event.save_the_date" class="newsletter">
                <h2 class="heading">Tickets available soon</h2>
                <p class="mt-2 mb-4">To get updates about this event, register for our newsletter.</p>
                <NewsletterForm />
            </div>
        </main>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params, redirect }) {
        const event = await $content('events', params.slug, 'index').fetch()
        if(event.url) redirect(event.url);

        const sponsors = event.sponsors ? await $content('sponsors', { deep: true }).where({dir: {'$in': event.sponsors.map(s => `/sponsors/${s}`)}}).fetch() : []
        return { event, sponsors }
    }
}

</script>

<style scoped>
aside {
    @apply lg:col-span-1;
    & .details {
        & img {
            @apply shadow rounded-lg
        }
        & h1 {
            @apply font-heading text-theme-main text-xl md:text-2xl mt-2 mb-4;
            transform: translate3d(0,0,0) rotate(0);
            &:before {
                @apply absolute;
                content: attr(data-title);
                -webkit-text-stroke: 0.4em white;
                z-index: -1;
            }
        }
        & p {
            @apply text-sm mb-4;
        }
        & h2 {
            @apply font-heading text-xl mb-4 mt-8;
        }
    }
    & .link {
        @apply mt-4 w-full;
    }
}
main {
    @apply md:col-span-2;
}
.newsletter {
    @apply px-4 py-8;
    @apply rounded-lg shadow bg-theme-main;
    @apply text-white text-center;

}
</style>
