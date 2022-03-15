<template>
    <!-- boxy -->
    <div class="my-4 bg-white">
        <p>Event session component</p>
        <ul class="display-disc">
            <li>{{ title }}</li>
            <li>{{ start }}</li>
            <li v-if="people.length > 0">{{ people }}</li>
            <li v-if="description">{{ description }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        start: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ''
        },
        people: {
            type: Array,
            required: false,
            default: () => []
        },
    },
    computed: {
        time() {
            return new Date(this.start)
        }
    }
}
</script>
