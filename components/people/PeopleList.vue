<template>
    <div class="grid" :class="gridClass">
        <Person v-for="item in list" :key="item.title" :person="item" :class="personClass" />
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
            default: 'md:grid-cols-2 gap-4'
        },
        personClass: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
