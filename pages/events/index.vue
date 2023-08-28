<template>
    <div class="wrapper py-16 text-center">
        <h1 class="heading">Events</h1>
        <EventList :list="upcoming" class="mt-8" />
        <h2 class="heading !text-xl mt-12 mb-2">Past Events</h2>
        <EventList :list="past" grid-class="md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8" class="mt-8" :show-description="false" />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $directus }) {
    const { data: events } = await $directus.items('events').readByQuery({ fields: ['*', '*.*'], filter: { hide: { _neq: true } } })
    const past = events.filter(e => e.is_past === true).sort((a, b) => new Date(b.start) - new Date(a.start))
    const upcoming = events.filter(e => e.is_past !== true).sort((a, b) => new Date(a.start) - new Date(b.start))
    return { past, upcoming }
  },
  head() {
    return headFactory({
      title: 'Events',
      path: this.$route.path
    })
  },
}
</script>
