<template>
    <div class="grid" :class="gridClass">
        <Collection v-for="item in list" :key="item.title" :collection="item" :class="collectionClass" />
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        gridClass: {
            type: String,
            required: false,
            default: 'md:grid-cols-2 lg:grid-cols-3 gap-4'
        },
        collectionClass: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
