<template>
  <div class="wrapper py-16 text-center">
    <h1 class="heading">People</h1>
    <p class="mt-2 mb-4">Here are the wonderful people who have given talks or written articles for You Got This!</p>
    <PeopleList :list="people" grid-class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8" />
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $directus }) {
        const { data: people } = await $directus.items('people').readByQuery({
          fields: ['slug', 'title', 'image'],
          sort: 'title',
          limit: -1
        })
        return { people }
    },
    head() {
      return headFactory({
        title: 'People',
        description: 'Here are the wonderful people who have given talks or written articles for You Got This!',
        path: this.$route.path
      })
    },
}
</script>
