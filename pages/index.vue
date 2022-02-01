<template>
  <div>
    <Hero />

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Collections</h2>
      <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
      <CollectionList />
      <n-link class="button bright mt-8 grid-rows-1" to="/collections">See all collections</n-link>
    </div>

    <div class="wrapper text-center pb-24">
      <h2 class="heading">Content Library</h2>
      <p class="mt-2 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in enim dolor iste sunt accusamus.</p>
      <ContentList />
      <n-link class="button bright mt-8 grid-rows-1" to="/collections">See full library</n-link>
    </div>

  </div>
</template>

<script>
export default {}
</script>
