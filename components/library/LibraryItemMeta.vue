<template>
    <div>
        <div v-if="type !== 'article'" class="box">{{ doc.descriptions.full }}</div>

        <PeopleList :list="people" grid-class="grid-cols-1 gap-4 mb-4" :class="{ 'mt-8': type === 'article' }" />

        <section v-if="collections && collections.length > 0">
            <h2>Related collections</h2>
            <CollectionList :list="sortedCollections" grid-class="grid-cols-1 gap-4" />
        </section>
        <section v-if="sponsors && sponsors.length > 0">
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
        type: {
            type: String,
            required: true,
            validator: (value) => (['article', 'video']).includes(value)
        }
    },
    computed: {
        sortedCollections() {
            const data = this.collections
            const addHighlight = data.map(d => ({ ...d, highlight: d.highlight || 0 }))
            const sortByHighlight = addHighlight.sort((a, b) => b.highlight - a.highlight)
            return sortByHighlight
        }
    }
}
</script>

<style scoped>
h2 {
    @apply font-heading text-xl mb-4 mt-8;
}
.box {
    @apply mb-4;
}
</style>
