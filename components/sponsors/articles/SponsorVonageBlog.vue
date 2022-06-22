<template>
    <a href="https://vonage.dev/3zvOjcO">
        <img src="/sponsors/vonage/banner-blog.png" alt="Ad from Vonage. Check out our latest tutorials, updates on Vonage products and news from our Developer Relations team.">
        <span>Thanks to Vonage for sponsoring this article</span>
    </a>
</template>

<style scoped>
img {
    @apply rounded-lg shadow;
    @apply transition;
    @apply mb-2;
     &:hover {
        @apply transition shadow-lg;
        transform: translate(0, -2px);
    }
    &:active {
        @apply transition shadow-none;
        transform: translate(2px, 2px);
    }
}
a {
    @apply uppercase font-normal text-xs no-underline text-right block;
}
</style>
