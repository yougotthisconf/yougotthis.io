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
    const page = await $content('static/conduct').fetch()
    return { page }
  },
  head() {
    return headFactory({
      title: 'Code of Conduct',
      description: 'You can help create a welcoming, respectful, and friendly community based on respect and trust. We are committed to creating a harassment-free community.',
      path: this.$route.path
    })
  },
}
</script>
