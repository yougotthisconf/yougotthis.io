<template>
    <div :class="`grid ${grid}`">
        <Sponsor v-for="item in list" :key="item.name" :sponsor="item" />
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
            default: 'md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
        }
    }
}
</script>
