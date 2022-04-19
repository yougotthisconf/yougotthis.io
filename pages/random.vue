<template>
    <div><pre>{{ items }}</pre></div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $content }) {
        const items = await $content('library', { deep: true }).without(['body']).fetch()
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
