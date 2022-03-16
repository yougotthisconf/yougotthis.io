<template>
    <div class="wrapper py-16 text-center">
        <h1 class="heading">Events</h1>
        <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
        <EventList :list="upcoming" class="mt-8" />
        <h2 class="heading !text-xl mt-12 mb-2">Past Events</h2>
        <EventList :list="past" grid-class="md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8" class="mt-8" :show-description="false" />
    </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const upcoming = await $content('events', { deep: true }).where({ past: { $ne: true } }).without(['body']).sortBy('start', 'asc').fetch()
    const past = await $content('events', { deep: true }).where({ past: true }).without(['body']).sortBy('start', 'desc').fetch()

    return { past, upcoming }
  },
}
</script>
