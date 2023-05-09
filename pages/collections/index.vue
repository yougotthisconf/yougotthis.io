<template>
  <div class="wrapper py-16 text-center">
    <h1 class="heading">Collections</h1>
    <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
    <CollectionList :list="collections" class="mt-8" />
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
  async asyncData({ $directus }) {
    const { data: collections } = await $directus.items('collections').readByQuery({
      fields: ['slug', 'title', 'description', 'cover'],
      sort: 'is_event,-date'
    })
    return { collections }
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
