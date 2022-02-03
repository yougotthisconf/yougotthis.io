<template>
  <div>
    <Hero />

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Collections</h2>
      <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
      <CollectionList />
      <n-link class="button bright mt-8 grid-rows-1" to="/collections">See all collections</n-link>
    </div>

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Content Library</h2>
      <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
      <ContentList :list="list" />
      <n-link class="button bright mt-8 grid-rows-1" to="/library">See full library</n-link>
    </div>

  </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
    const videos = await $content('library/videos', { deep: true }).without(['body']).sortBy('date', 'desc').limit(8).fetch()
    const people = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()

    const addTypes = [
        ...videos.map(v => ({ ...v, type: 'video' }))
    ]

    const addFullProfiles = addTypes.map(item => {
        let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
        profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
        return { ...item, people: profiles }
    })

    const list = addFullProfiles
    return { list }
  },
}
</script>
