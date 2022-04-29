<template>
    <div class="wrapper my-16">
      <h1 class="heading text-center">{{ product.title }} - £{{product.price_gbp}}</h1>
      <div class="images">
        <img v-for="image in product.images" :key="image.name" :src="`${product.dir}/${image.name}`" :alt="image.alt">
      </div>
        <p class="mt-8 text-center font-bold text-lg md:text-xl">{{ product.description }}</p>

        <ul class="flex flex-col text-center md:flex-row justify-center flex-wrap gap-4 mt-6">
          <li v-if="product.attributes.includes('free-shipping')">Free Worldwide Shipping</li>
          <li v-if="product.attributes.includes('free-shipping')" aria-hidden="true" class="hidden md:block">&bull;</li>
          <li>Easy and fast 28 day <n-link to="/merch/returns" class="underline">return policy</n-link></li>
          <li v-if="product.attributes.includes('multi-size')" aria-hidden="true" class="hidden md:block">&bull;</li>
          <li v-if="product.attributes.includes('multi-size')">Exchanging sizes is easy</li>
          <li v-if="product.attributes.includes('straight-fitted')" aria-hidden="true" class="hidden md:block">&bull;</li>
          <li v-if="product.attributes.includes('straight-fitted')">Available in straight fit and fitted</li>
        </ul>

        <nuxt-content :document="product" class="prose max-w-full my-6 text-center" />

        <div class="links flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a v-for="link in product.links" :key="link.label" :href="link.url" class="button bright link">{{ link.label }}</a>
        </div>

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
      title: this.product.title,
      description: this.product.description,
      path: this.$route.path,
      image: this.product.images[0].name
    })
  },
}
</script>

<style scoped>
.images {
  @apply flex flex-row justify-center gap-6 mt-8 flex-wrap;
}
img {
  @apply max-w-[200px] rounded-md shadow;
}
</style>
