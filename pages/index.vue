<template>
  <div>
    <Hero />

    <div class="wrapper text-center mt-12 sm:mt-0 pb-24">
      <h2 class="heading">Collections</h2>
      <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
      <CollectionList :list="collections" collection-class="last:hidden lg:last:block" />
      <n-link class="button bright mt-8 grid-rows-1" to="/collections">See all collections</n-link>
    </div>

    <div class="wrapper text-center pb-24">
      <h2 class="heading mb-4">Latest Content</h2>
      <ContentList :list="content" />
      <n-link class="button bright mt-8 grid-rows-1" to="/library">See full library</n-link>
    </div>

    <NewsletterHome class="mb-24" />

    <div class="wrapper text-center pb-24">
      <h2 class="heading mb-4">Upcoming Events</h2>
      <EventList :list="events" event-class="last:hidden lg:last:block" />
      <n-link class="button bright mt-8 grid-rows-1" to="/events">See all events</n-link>
    </div>

    <div class="wrapper pb-8 text-center">
      <h2 class="heading">Sponsors</h2>
      <p class="mt-2 mb-4">Thanks to all of our current and past sponsors.</p>
      <SponsorList :list="sponsors" grid-class="grid-cols-3 md:grid-cols-9 gap-2" />
      <n-link class="button bright mt-8 grid-rows-1" to="/sponsors">See all sponsors</n-link>
    </div>

  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $content, $directus }) {
    const events = await $content('events', { deep: true }).where({ past: { $ne: true }, hide: { $ne: true } }).sortBy('start', 'asc').limit(3).without(['body']).fetch()
    const sponsors = await $content('sponsors', { deep: true }).where({ feature: true }).sortBy('name', 'asc').fetch()

    const { data: content } = await $directus.items('library').readByQuery({ 
        limit: 8,
        sort: '-date',
        fields: ['slug', 'title', 'cover', 'type', 'duration', 'people.people_slug.title', 'people.people_slug.image']
    })

    let { data: { collections } } = await $directus.items('featured').readByQuery({
      fields: ['collections.item.slug', 'collections.item.title', 'collections.item.description', 'collections.item.cover']
    })
    collections = collections.map(c => c.item)

    return {
      content,
      collections,
      events,
      sponsors
    }
  },
  head() {
    return headFactory()
  },
}
</script>
