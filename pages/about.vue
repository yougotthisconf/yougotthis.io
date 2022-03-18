<template>
    <div>TODO: About You Got This</div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    head() {
        return headFactory({
            title: 'About',
            path: this.$route.path
        })
    },
}
</script>
