<template>
  <div>
    <Hero />

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Collections</h2>
      <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
      <CollectionList :list="collections" />
      <n-link class="button bright mt-8 grid-rows-1" to="/collections">See all collections</n-link>
    </div>

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Latest From the Content Library</h2>
      <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
      <ContentList :list="content" />
      <n-link class="button bright mt-8 grid-rows-1" to="/library">See full library</n-link>
    </div>

    <Newsletter />

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Upcoming events</h2>
      <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
      <EventList :list="events" />
      <n-link class="button bright mt-8 grid-rows-1" to="/events">See all events</n-link>
    </div>

    <div class="wrapper pb-8">
      <div class="bg-green-500 p-4 mb-8">Todo: sponsors</div>
      <div class="bg-green-500 p-4 mb-8">Todo: footer</div>
    </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const videos = await $content('library/videos', { deep: true }).without(['body']).sortBy('date', 'desc').limit(8).fetch()
    const collections = await $content('collections', { deep: true }).without(['body']).sortBy('date', 'desc').limit(6).fetch()
    const people = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()
    const events = await $content('events', { deep: true }).where({ end: { $gt: Date.now() } }).sortBy('date', 'asc').limit(3).without(['body']).fetch()

    const contentWithTypes = [
      ...videos.map(v => ({ ...v, type: 'video' }))
    ]

    const contentWithPeople = contentWithTypes.map(item => {
      let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
      profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
      return { ...item, people: profiles }
    })


    return {
      content: contentWithPeople,
      collections,
      events
    }
  },
}
</script>
