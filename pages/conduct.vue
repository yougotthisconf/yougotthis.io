<template>
    <div class="wrapper py-16">
        <h1 class="heading text-center">{{ page.title }}</h1>
        <nuxt-content :document="page" class="prose lg:prose-lg mt-8 mx-auto" />
    </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('static/conduct').fetch()
    return { page }
  },
}
</script>
