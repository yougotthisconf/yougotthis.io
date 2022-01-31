<template>
    <n-link to="/">
        <div class="background-image" style="background-image: url('https://placekitten.com/300/200')">
            <img src="https://placekitten.com/100/100" alt="Icon desc">
        </div>
        <div class="p-4">
            <h2 data-title="Title of collection here">Title of collection here</h2>
            <p>This is a quick one-liner that explains what to expect from this collection.</p>
        </div>
    </n-link>
</template>1

<style scoped>
a {
    @apply bg-white rounded-lg transition;
    @apply border-2 border-theme-black;
    box-shadow: var(--theme-black) 2.5px 2.5px 0 0;
    &:active {
        @apply transition;
        box-shadow: var(--theme-black) 0 0 0 0;
        transform: translate(2px, 2px);
    }
}
.background-image {
    @apply h-48 rounded-t-md bg-cover bg-no-repeat relative;
    & img {
        @apply absolute bottom-8 left-4 h-12 rounded-full;
    }
}
h2 {
  @apply font-heading text-theme-main text-2xl md:text-3xl -mt-7 md:-mt-9;
  transform: translate3d(0,0,0) rotate(0);
  &:before {
    @apply absolute;
    content: attr(data-title);
    -webkit-text-stroke: 0.3em white;
    z-index: -1;
  }
}
p {
    @apply mt-2 md:mt-4;
}
</style>
