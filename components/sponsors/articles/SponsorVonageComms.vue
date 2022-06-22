<template>
    <a href="#">
        <img src="/sponsors/vonage/banner-comms-apis.png" alt="Ad from Vonage. Communications APIs. Vonage Does That. Get Started now with free credit.">
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
