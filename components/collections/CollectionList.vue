<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Collection v-for="item in list" :key="item.title" :collection="item" />
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
