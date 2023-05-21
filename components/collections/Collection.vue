<template>
    <n-link :to="`/collections/${collection.slug}`">
        <img :src="$asset(collection.cover)" alt="">
        <div class="meta">
            <h2 :data-title="collection.title">{{ collection.title }}</h2>
            <p>{{ collection.description }}</p>
        </div>
    </n-link>
</template>

<script>
export default {
    props: {
        collection: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
a {
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
}
img {
    @apply rounded-t-md;
}
.meta {
    @apply p-4 flex-1 flex flex-col justify-start;
}
h2 {
  @apply font-heading text-theme-alt text-2xl md:text-3xl -mt-7 md:-mt-8;
  transform: translate3d(0,0,0) rotate(0);
  &:before {
    @apply absolute;
    content: attr(data-title);
    -webkit-text-stroke: 0.4em white;
    z-index: -1;
  }
}
p {
    @apply mt-2 md:mt-4;
}
</style>
