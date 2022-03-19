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
  async asyncData({ $content }) {
    const upcoming = await $content('events', { deep: true })
      .where({ hide: { $ne: true } })
      .where({ past: { $ne: true } })
      .sortBy('start', 'asc')
      .without(['body'])
      .fetch()
    const past = await $content('events', { deep: true })
      .where({ hide: { $ne: true } })
      .where({ past: true })
      .sortBy('start', 'desc')
      .without(['body'])
      .fetch()
    return { upcoming, past }
  },
  head() {
    return headFactory({
      title: 'Events',
      path: this.$route.path
    })
  },
}
</script>
