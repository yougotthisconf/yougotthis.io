<template>
  <div>
    <div class="wrapper py-16">
      <h1 class="heading text-center">Collections</h1>
      <p class="mt-2 mb-4 text-center">View our curated collections designed to help you navigate specific core skill areas.</p>
      <CollectionList :list="collections" class="mt-8" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const collections = await $content('collections', { deep: true }).without(['body']).sortBy('date', 'desc').fetch()
    return { collections }
  },
}
</script>
