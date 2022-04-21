<template>
  <div class="wrapper my-16">
    <h1 class="heading text-center">Merch</h1>
    <p class="mt-2 mb-4 text-center">A set of comfy and <n-link to="/merch/sustainability" class="underline">sustainable</n-link> items to remind yourself that you got this!</p>
    <ul class="flex flex-row justify-center flex-wrap gap-4">
      <li>Free UK Shipping when you spend £50</li>
      <li aria-hidden="true" class="hidden md:block">&bull;</li>
      <li>Easy and fast 28 day <n-link to="/merch/returns" class="underline">return policy</n-link></li>
      <li aria-hidden="true" class="hidden md:block">&bull;</li>
      <li>Exchanging sizes is easy</li>
    </ul>
    <div v-for="category in categories" :key="category.title" class="mt-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <n-link v-for="product in category.products" :key="product.title" :to="product.dir" class="product">
          <img :src="`${product.dir}/${product.images[0].name}`" :alt="product.images[0].alt">
          <div class="meta">
            <h3>{{ product.title }} - £{{ product.price_gbp }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </n-link>
      </div>
    </div>
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
  async asyncData({ $content }) {
    let categories = await $content('merch/categories').fetch()
    let products = await $content('merch', { deep: true }).fetch()
    products = products.filter(p => p.slug !== 'categories')

    categories = categories.list.map(category => {
        const prods = category.products.map(item => products.find(product => product.dir.includes(item)))
        return { ...category, products: prods }
    })

    return { categories }
  },
  head() {
    return headFactory({
      title: 'Merch',
      description: 'A set of comfy and <n-link to="/merch/sustainability" class="underline">sustainable</n-link> items to remind yourself that you got this!',
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
