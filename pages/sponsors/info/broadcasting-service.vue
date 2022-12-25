<template>
    <div class="wrapper py-16">
        <h1 class="heading text-center">{{ page.title }}</h1>
        <nuxt-content :document="page" class="prose lg:prose-lg mt-8 mx-auto" />
    </div>
</template>

<script>
import config from '../../../config'
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $content }) {
    const page = await $content('static/sponsor-conf-broadcasting-service').fetch()
    return { page }
  },
  head() {
    return headFactory({
      title: this.page.title,
      path: this.$route.path,
      image: `${config.baseURL}/events/broadcasting-service/broadcasting-service.png`,
      absolute: true
    })
  },
}
</script>

<style scoped>
td {
  @apply py-2 pl-2;
}
tr {
  @apply border-b;
}
</style>
