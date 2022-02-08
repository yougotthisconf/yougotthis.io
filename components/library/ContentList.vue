<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <Content v-for="item in list" :key="item.title" :title="item.title" :length="42" :people="item.people" :type="item.type" />
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
