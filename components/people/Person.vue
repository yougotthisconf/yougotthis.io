<template>
    <n-link :to="person.dir" class="box">
        <div class="core">
            <img :src="`${person.dir}/${person.avatar}`" :alt="person.title" class="w-9">
            <p>{{ person.title }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
        <nuxt-content v-if="bio" :document="person" />
    </n-link>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true
        },
        bio: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
a {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow w-full;
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
.core {
    @apply flex items-center justify-start space-x-2 text-left;
}
img {
    @apply rounded-full border-2 border-white;
}
svg {
    @apply w-4 h-4 !ml-auto;
}
</style>
