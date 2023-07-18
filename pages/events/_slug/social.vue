<template>
  <div class="wrapper">
    <div v-for="(session, i) in event.sessions" :key="session.title">
      <div :ref="`card-${i}`" class="mt-12 bg-cover flex flex-col" :style="`background-image: url(${$asset(event.social_bg.id)}); aspect-ratio: 16 / 9;`">
        <div class="grid grid-cols-4 gap-8 p-8 mb-12 flex-1">
          <img :src="$asset(session.people[0].image)" alt="" class="rounded-full w-full">
          <div class="text text-white font-normal heading drop-shadow-md col-span-3 flex flex-col justify-center">
            <h2 class="text-7xl">{{ session.title }}</h2>
            <p class="text-4xl mt-4">{{ session.people[0].title }}</p>
          </div>
        </div>
        <img :src="$asset(event.social_bottom.id)" alt="">
      </div>
      <button class="mt-4 button bright w-full block" @click="download(i, session.title)">Download</button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $directus, params }) {
    const event = await $directus.items('events').readOne(params.slug, { 
        fields: ['*', '*.*', '*.*.*']
    })
    event.sessions = event.sessions.map(session => {
      const people = event.people.filter(person => session.speaker_names.includes(person.people_slug.title)).map(p => p.people_slug)
      return { ...session, people }
    })
    return { event }
  },
  methods: {
    async download(i, title) {
      const [el] = this.$refs[`card-${i}`]
      const canvas = await this.$html2canvas(el, { useCORS: true, type: 'dataURL', scale: 2 })
      const a = document.createElement("a")
      a.href = canvas
      a.download = `social-${title.toLowerCase().split(':').join('').split(' ').join('-')}.png`
      a.click()
    }
  },
}
</script>
