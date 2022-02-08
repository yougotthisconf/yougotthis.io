<template>
    <n-link to="/">
        <div class="background-image" style="background-image: url('https://placekitten.com/300/200')">
            <img src="https://placekitten.com/100/100" alt="Icon desc">
        </div>
        <div class="meta">
            <h2 :data-title="title">{{ title }}</h2>
            <p>{{ summary }}</p>
        </div>
    </n-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
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
    @apply md:h-48 rounded-t-md bg-cover bg-no-repeat relative;
    & img {
        @apply absolute bottom-8 left-4 h-12 rounded-full;
    }
}
.meta {
    @apply p-4 flex-1 flex flex-col justify-between;
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
