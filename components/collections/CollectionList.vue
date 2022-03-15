<template>
    <div class="grid" :class="grid">
        <Collection v-for="item in list" :key="item.title" :collection="item" />
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        grid: {
            type: String,
            required: false,
            default: 'md:grid-cols-2 lg:grid-cols-3 gap-4'
        }
    }
}
</script>
