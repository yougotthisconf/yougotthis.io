<template>
    <div class="wrapper my-12">
        <p class="text-xl text-center">Finding you something great...</p>
    </div>
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

        let path
        if(random.slug !== 'index') path = `/library/${random.slug}`
        else path = `/library/${random.path.split('/').slice(-2)[0]}`

        this.$router.push({ path });
    },
}
</script>
