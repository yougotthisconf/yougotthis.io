<template>
    <div>
        <iframe v-if="vimeo" :src="`https://player.vimeo.com/video/${vimeo}?h=44d49687ad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen class="w-full" style="aspect-ratio: 16/9"></iframe>
    </div>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            vimeo: false
        }
    },
     async created() {
        const { vimeo } = await this.$content('library', this.path, { deep: true }).only('vimeo').fetch()
        this.vimeo = vimeo
    },
}
</script>
