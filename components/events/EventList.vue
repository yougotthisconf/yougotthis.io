<template>
    <div class="grid" :class="gridClass">
        <Event v-for="item in list" :key="item.title" :event="item" class="event" :class="eventClass" />
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
            default: 'md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'
        },
        eventClass: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
