<template>
    <div class="wrapper py-16">
        <h1 class="heading text-center">Bio Links</h1>
        <div class="links">
          <a v-for="link in links" :key="link.url" :href="link.url" class="box">{{ link.label }}</a>
        </div>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  data() {
    return {
      links: []
    }
  },
  head() {
    return headFactory({
      title: 'Bio Links',
      path: this.$route.path
    })
  },
  async mounted() {
    const response = await this.$directus.items('links_in_bio').readByQuery()
    this.links = response.data.link
  },
}
</script>

<style scoped>
.links {
  @apply flex flex-col gap-4 max-w-lg mx-auto mt-8;
  & a {
    @apply text-center;
  }
}
</style>
