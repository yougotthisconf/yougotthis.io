<template>
    <n-link to="/">
        <div class="background-image" :style="`background-image: url('${collection.dir}/${collection.cover}')`">
        </div>
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
            require: true
        }
    }
}
</script>

<style scoped>
a {
    @apply flex flex-col;
    @apply bg-white text-theme-black rounded-lg transition;
    @apply border-2 border-theme-black;
    @apply text-left;
    box-shadow: var(--theme-black) 2.5px 2.5px 0 0;
    &:active {
        @apply transition;
        box-shadow: var(--theme-black) 0 0 0 0;
        transform: translate(2px, 2px);
    }
}
.background-image {
    height: 36vw;
    @apply md:h-48 rounded-t-md bg-cover bg-center bg-no-repeat relative;
    & img {
        @apply absolute bottom-8 left-4 h-12 rounded-full;
    }
}
.meta {
    @apply p-4 flex-1 flex flex-col justify-start;
}
h2 {
  @apply font-heading text-theme-main text-2xl md:text-3xl -mt-7 md:-mt-8;
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
