<template>
  <div class="wrapper my-16">
    <h1 class="heading text-center">Merch</h1>
    <p class="my-2 text-center">A set of comfy and <n-link to="/merch/sustainability" class="underline">sustainable</n-link> items to remind yourself that you got this!</p>
    <ul class="flex flex-row justify-center flex-wrap gap-4">
      <li>Easy and fast 28 day <n-link to="/merch/returns" class="underline">return policy</n-link></li>
      <li aria-hidden="true" class="hidden md:block">&bull;</li>
      <li>Exchanging sizes is easy</li>
    </ul>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      <n-link v-for="product in merch" :key="product.slug" :to="`/merch/${product.slug}`" class="product"> 
        <img :src="$asset(product.images[0].directus_files_id.id)" :alt="merch[0].images[0].directus_files_id.description">
        <div class="meta">
          <h3>{{ product.title }} - £{{ product.price_gbp }}</h3>
          <p>{{ product.description }}</p>
        </div>
      </n-link>
    </div>
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $directus }) {
    const { data: merch } = await $directus.items('merch').readByQuery({fields:['*', '*.*', '*.*.*']})
    return { merch }
  },
  head() {
    return headFactory({
      title: 'Merch',
      description: 'A set of comfy and sustainable items to remind yourself that you got this!',
      path: this.$route.path
    })
  },
}
</script>

<style scoped>
h2 {
  @apply font-heading ;
}
a.product {
  @apply flex flex-col;
  @apply bg-white text-theme-black rounded-lg transition;
  @apply text-left;
  @apply shadow;
  &:hover {
      @apply transition shadow-lg;
      transform: translate(0, -2px);
  }
  &:active {
      @apply transition shadow-none;
      transform: translate(2px, 2px);
  }
  & p {
    @apply mt-2 md:mt-4;
  }
}
img {
    @apply rounded-t-md;
}
.meta {
  @apply p-4;
}
h3 {
  @apply font-heading text-theme-alt text-lg md:text-xl;
}
</style>
