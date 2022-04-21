<template>
    <div class="wrapper my-16">
        <h1 class="heading text-center">{{ product.title }}</h1>
        <code class="mt-4 block text-xs leading-3">{{ product }}</code>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $content, params }) {
    const product = await $content('merch', params.slug, 'index').fetch()
    return { product }
  },
  head() {
    return headFactory({
    //   title: this.page.title,
    //   description: this.page.description,
    //   path: this.$route.path
    })
  },
}
</script>
