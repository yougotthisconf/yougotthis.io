<template>
    <form action="https://buttondown.email/api/emails/embed-subscribe/yougotthisconf" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/yougotthisconf', 'popupwindow')">
        <input id="bd-email" aria-label="Email" required placeholder="Enter your email" name="email" class="text-input" />
        <input type="hidden" name="tag" value="ygt-site" />
        <input type="hidden" value="1" name="embed" />
        <button type="submit" class="button">Subscribe</button>
    </form>
</template>

<style scoped>
form {
    @apply flex flex-col gap-4;
    @apply md:flex-row justify-center;
}
input#bd-email {
    @apply w-full;
    @apply md:w-64;
    @apply text-theme-black;
}
</style>
