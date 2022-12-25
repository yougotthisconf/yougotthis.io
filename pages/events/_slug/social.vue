<template>
  <div class="wrapper">
    <nuxt-content :document="event" class="max-w-full prose lg:prose-lg" :class="{'mt-6' :event.save_the_date}" />
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $content, params, redirect }) {
      const event = await $content('events', params.slug, 'index').fetch()
      if(event.url) redirect(event.url);

      const sponsors = event.sponsors ? await $content('sponsors', { deep: true }).where({dir: {'$in': event.sponsors.map(s => `/sponsors/${s}`)}}).fetch() : []

      let people = event.people ? await $content('people', { deep: true }).where({dir: {'$in': event.people.map(p => `/people/${p}`)}}).fetch() : []
      people = people.map(p => ({...p, slug: p.dir.split('/')[2]}))
      people = people.reduce((acc, curr) => { acc[curr.slug] = curr; return acc; }, {})

      return { event: { ...event, people }, sponsors }
  },
  head() {
      return headFactory({
          title: this.event.title,
          description: this.event.description,
          path: this.$route.path,
          image: this.event.cover
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
