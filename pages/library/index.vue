<template>
    <div class="wrapper py-16">
        <h1 class="heading text-center">Library</h1>
        <ContentList :list="list" />
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
    const videos = await $content('library/videos', { deep: true }).without(['body']).sortBy('published', 'desc').fetch()
    const people = await $content('people', { deep: true }).fetch()

    const addTypes = [
        ...videos.map(v => ({ ...v, type: 'video' }))
    ]

    const addFullProfiles = addTypes.map(item => {
        let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
        profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
        return { ...item, people: profiles }
    })

    const list = addFullProfiles

    console.log(people[0])
    return { list }
  },
}
</script>
