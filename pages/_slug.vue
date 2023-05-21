<template>
  <div class="wrapper py-16">
      <h1 class="heading text-center">{{ page.title }}</h1>
      <article class="prose lg:prose-lg mt-8 mx-auto" v-html="$md.render(page.body)"></article>
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
async asyncData({ $directus, params }) {
  const page = await $directus.items('pages').readOne(params.slug)
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
