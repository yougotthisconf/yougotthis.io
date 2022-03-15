<template>
    <div class="md:grid md:grid-cols-3 gap-y-8 sm:gap-8">
        <aside>
            <LibraryItemMeta :doc="doc" :collections="collections" :people="people" :sponsors="sponsors" :dir="dir" class="hidden md:block" />
        </aside>
        <main>
            <LibraryItem :path="dir" class="my-8 md:my-0" />
            <LibraryItemMeta :doc="doc" :collections="collections" :people="people" :sponsors="sponsors" :dir="dir" class="block md:hidden" />
            <nuxt-content :document="doc" class="max-w-full prose lg:prose-lg mt-8"></nuxt-content>
        </main>
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
aside {
    @apply lg:col-span-1;
}
main {
    @apply md:col-span-2;
}
.box, /deep/ .box {
    @apply bg-white text-theme-black rounded-lg transition text-left shadow;
    @apply mb-4 p-4 w-full;
}
</style>
