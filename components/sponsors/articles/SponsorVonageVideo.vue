<template>
    <a href="#">
        <img src="/sponsors/vonage/banner-video-api.png" alt="Ad from Vonage. Quickly integrate live interactive video into your app with our Video API. Get Started now with free credit.">
        <span>Sponsor promotional message</span>
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
