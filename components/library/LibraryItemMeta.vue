<template>
    <div>
        <div class="people">
            <n-link v-for="person in people" :key="person.dir" :to="person.dir" class="box">
                <img :src="`${person.dir}/${person.avatar}`" :alt="`Picture of ${person.name}`" class="w-9">
                <p>{{ person.name }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </n-link>
        </div>
        <section class="box">
            <p>{{ doc.descriptions.full ? doc.descriptions.full : doc.descriptions.short }}</p>
        </section>
        <section>
            <h2>Featured in</h2>
            <CollectionList :list="collections" grid-class="grid-cols-1 gap-4" />
        </section>
        <section>
            <h2>Sponsored by</h2>
            <SponsorList :list="sponsors" grid-class="grid-cols-2 gap-2 mb-8" />
        </section>
    </div>
</template>

<script>
export default {
    props: {
        doc: {
            type: Object,
            required: true
        },
        collections: {
            type: Array,
            required: true
        },
        people: {
            type: Array,
            required: true
        },
        sponsors: {
            type: Array,
            required: true
        },
        dir: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
h2 {
    @apply font-heading text-xl mb-2 mt-8;
}
.people {
    & a {
        @apply flex items-center justify-start space-x-2;
        @apply pr-6;
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
    & img {
        @apply rounded-full border-2 border-white;
    }
    & svg {
        @apply w-4 h-4 !ml-auto;
    }
}
</style>
