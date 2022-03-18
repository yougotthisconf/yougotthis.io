<template>
    <n-link :to="person.dir" class="box">
        <img :src="`${person.dir}/${person.avatar}`" :alt="`Picture of ${person.title}`" class="w-9">
        <p>{{ person.title }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </n-link>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow w-full;
    @apply flex items-center justify-start space-x-2;
    @apply p-4 pr-6;
    @apply transition;
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
    @apply rounded-full border-2 border-white;
}
svg {
    @apply w-4 h-4 !ml-auto;
}
</style>
