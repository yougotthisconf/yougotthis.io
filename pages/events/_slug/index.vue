<template>
    <div class="wrapper my-12 md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
        <aside>
            <div class="details">
                <img :src="`${$asset(event.cover.id)}?width=760`" alt="" class="rounded">
                <h1 :data-title="event.title">{{ event.title }}</h1>
                <p v-if="event.description">{{ event.description }}</p>

                <EventMeta :event="event" class="mb-4" />

                <a v-for="link in event.links" :key="link.url" :href="link.url"  class="button bright link">{{ link.text }}</a>
            </div>

            <div class="sponsors mb-8">
                <h2 v-if="event.sponsors?.length > 0">Sponsored by</h2>
                <SponsorList :list="event.sponsors" grid-class="grid-cols-2 gap-2 mt-2" />
            </div>
        </aside>
        <main>
            <NewsletterBlock v-if="event.save_the_date" class="mb-8" title="Tickets available soon" text="To get updates about this event, register for our newsletter." />

            <article v-if="event.top_text" class="prose mb-8" v-html="event.top_text"></article>

            <div v-if="event.sessions?.length > 0 && !event.save_the_date">
                <EventSession 
                  v-for="session in event.sessions"
                  :key="`${session.title}-${session.start}`"
                  :title="session.title"
                  :start="session.start"
                  :description="session.description"
                  :speakers="session.speaker_names" />
            </div>

            <div v-if="event.people?.length > 0">
                <h2 class="font-heading text-xl">Meet our speakers</h2>
                <Person v-for="person in event.people" :key="person.slug" :person="person" :show-arrow="false" class="mt-4" />
            </div>
        </main>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $directus, params, redirect }) {
        const event = await $directus.items('events').readOne(params.slug, { 
            fields: ['*', '*.*', '*.*.*']
        })
        event.sponsors = event.sponsors.map(s => s.sponsors_slug)
        event.people = event.people.map(p => p.people_slug)

        return { event }
    },
    head() {
        return headFactory({
            title: this.event.title,
            description: this.event.description,
            path: this.$route.path,
            image: this.$asset(this.event.cover.id)
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
