<template>
    <div class="wrapper my-12">
        <p class="text-xl text-center">Finding you something great...</p>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $directus }) {
        const { data: items } = await $directus.items('library').readByQuery({ limit: -1, fields: ['slug'] })
        return { items }
    },
    head() {
        return headFactory({
            title: 'Random',
            path: this.$route.path
        })
    },
    created() {
        const it = this.items
        const random = it[Math.floor(Math.random() * it.length)]
        this.$router.push({ path: `/library/${random.slug}` });
    },
}
</script>
