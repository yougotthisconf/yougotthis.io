<template>
    <div class="wrapper my-12 md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
        <aside>
            <div class="details">
                <img :src="`${event.dir}/${event.cover}`" alt="" class="rounded">
                <h1 :data-title="event.title">{{ event.title }}</h1>
                <p v-if="event.description">{{ event.description }}</p>

                <EventMeta :event="event" />

                <a v-if="event.link" :href="event.link.url" class="button bright link">{{ event.link.text }}</a>
            </div>

            <div class="sponsors">
                <h2 v-if="sponsors.length > 0">Sponsored by</h2>
                <SponsorList :list="sponsors" grid-class="grid-cols-2 gap-2 mb-8 mt-2" />
            </div>


        </aside>
        <main>
            <nuxt-content v-if="!event.save_the_date" :document="event" class="max-w-full prose lg:prose-lg" />
            <NewsletterBlock v-if="event.save_the_date" title="Tickets available soon" text="To get updates about this event, register for our newsletter." />
        </main>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $content, params, redirect }) {
        const event = await $content('events', params.slug, 'index').fetch()
        if(event.url) redirect(event.url);

        const sponsors = event.sponsors ? await $content('sponsors', { deep: true }).where({dir: {'$in': event.sponsors.map(s => `/sponsors/${s}`)}}).fetch() : []
        return { event, sponsors }
    },
    head() {
        return headFactory({
            title: this.event.title,
            description: this.event.description,
            path: this.$route.path,
            image: this.event.cover
        })
    },
}

</script>

<style scoped>
aside {
    @apply lg:col-span-1;
    @apply flex flex-col gap-8;
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
    }
    & h2 {
        @apply font-heading text-xl;
    }
    & .link {
        @apply mt-4 w-full;
    }
}
main {
    @apply md:col-span-2;
}
</style>
