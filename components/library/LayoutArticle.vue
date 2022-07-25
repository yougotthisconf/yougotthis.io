<template>
    <div>
        <p class="-mt-10 mb-12 text-center md:hidden">A {{ doc.duration }} minute read from {{ people.map(p => p.title).join(' and ') }}</p>
        <div class="md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
            <aside>
                <img :src="`${doc.dir}/${doc.cover}`" alt="" class="cover">
                <LibraryItemMeta :doc="doc" :collections="collections" :people="people" :sponsors="sponsors" :dir="dir" type="article" class="hidden md:block" />
            </aside>
            <main>
                <div class="max-w-full prose lg:prose-lg mt-0 md:-mt-5">
                    <nuxt-content :document="doc"></nuxt-content>
                </div>
                <div v-for="person in people" :key="person.title" class="box mt-6">
                    <nuxt-content :document="person" class="prose"></nuxt-content>
                    <a v-if="person.twitter" class="button bright mt-4 mb-2" :href="`https://twitter.com/${person.twitter}`">@{{ person.twitter }} on Twitter</a>
                </div>
                <section v-if="collections && collections.length > 0" class="block md:hidden">
                    <h2>Related collections</h2>
                    <CollectionList :list="collections" grid-class="grid-cols-1 gap-4" />
                </section>
            </main>
        </div>
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
.cover {
    @apply rounded-lg shadow-lg mb-4;
}
aside {
    @apply lg:col-span-1;
}
main {
    @apply md:col-span-2;
}
h2 {
    @apply mt-8 mb-4 font-heading text-xl;
}

/deep/ h2 {
    @apply !font-normal !font-heading;
}
/deep/ blockquote {
    @apply text-xl md:text-3xl;
    border-left-color: var(--theme-main);
    & p {
        @apply !text-theme-main font-heading;
    }
}
</style>
