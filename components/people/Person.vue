<template>
    <n-link :to="`/people/${person.slug}`" class="box">
        <div class="core">
            <img :src="`${$asset(person.image)}?width=100`" :alt="person.title" class="w-12">
            <p>{{ person.title }} <span v-if="person.pronouns">({{ person.pronouns }})</span></p>
            <svg v-if="showArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
        <article v-if="person.bio" class="prose" v-html="person.bio"></article>
    </n-link>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true
        },
        showArrow: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
a {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow w-full;
    @apply p-4 pr-6;
    @apply transition;
    @apply block;
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
p {
    @apply font-heading text-xl;
}
article {
    @apply mt-2;
}
</style>
