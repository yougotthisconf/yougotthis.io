<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Event v-for="item in list" :key="item.title" :event="item" class="event" />
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.event:last-child {
    @apply hidden lg:block;
}
</style>
