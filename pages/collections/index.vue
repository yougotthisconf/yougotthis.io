<template>
  <div class="wrapper py-16 text-center">
    <h1 class="heading">Collections</h1>
    <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
    <CollectionList :list="main" class="mt-8" />
    <h2 class="heading !text-xl mt-12 mb-2">Event Collections</h2>
    <CollectionList :list="events" class="mt-8" />
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
  async asyncData({ $content }) {
    const main = await $content('collections', { deep: true }).without(['body']).where({ type: { $ne: 'event' } }).sortBy('highlight', 'desc').sortBy('date', 'desc').fetch()
    const events = await $content('collections', { deep: true }).without(['body']).where({ type: 'event' }).sortBy('highlight', 'desc').sortBy('date', 'desc').fetch()

    return { main, events }
  },
  head() {
    return headFactory({
      title: 'Collections',
      description: 'View our curated collections designed to help you navigate specific core skill areas.',
      path: this.$route.path
    })
  },
}
</script>
