<template>
    <div>TODO: Sponsor YGT</div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
//   async asyncData({ $content }) {
//     const page = await $content('static/contribute').fetch()
//     return { page }
//   },
    head() {
        return headFactory({
            title: 'Sponsor You Got This!',
            description: 'Support our core skills events and content library.',
            path: this.$route.path
        })
    },
}
</script>
