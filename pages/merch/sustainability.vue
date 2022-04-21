<template>
    <div class="wrapper py-16">
        <h1 class="heading text-center">{{ page.title }}</h1>
        <nuxt-content :document="page" class="prose lg:prose-lg mt-8 mx-auto" />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $content }) {
    const page = await $content('static/merch-sustainability').fetch()
    return { page }
  },
  head() {
    return headFactory({
      title: this.page.title,
      description: this.page.description,
      path: this.$route.path
    })
  },
}
</script>
