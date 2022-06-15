<template>
    <div class="wrapper py-16 text-center">
        <h1 class="heading">Sponsors</h1>
        <p class="mt-2 mb-4">We feel very strongly about making sure You Got This! runs inclusive initiatives for our audience, and that it's worthwhile for people who help make it happen. Thanks to sponsors, we have live captioning at every event and pay our speakers and authors.</p>
        <h2 class="heading !text-xl mt-12 mb-2">Current Sponsors</h2>
        <SponsorList :list="current" grid-class="grid-cols-2 lg:grid-cols-5 gap-2" />

        <h2 class="heading !text-xl mt-12 mb-2">Past Sponsors</h2>
        <SponsorList :list="past" grid-class="grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2" />

        <n-link class="button bright mt-8 grid-rows-1" to="/sponsors/info">Learn more about sponsorship</n-link>
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    async asyncData({ $content }) {
        const sponsors = await $content('sponsors', { deep: true }).sortBy('name', 'asc').fetch()
        const current = await sponsors.filter(sponsor => sponsor.current)
        const past = await sponsors.filter(sponsor => !sponsor.current)

        return { current, past }
    },
    head() {
        return headFactory({
            title: 'Sponsors',
            path: this.$route.path
        })
    },
}
</script>
