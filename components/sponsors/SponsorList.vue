<template>
    <div class="grid" :class="gridClass">
        <Sponsor v-for="item in list" :key="item.title" :sponsor="item" :class="sponsorClass" />
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
            default: 'md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
        },
        sponsorClass: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
