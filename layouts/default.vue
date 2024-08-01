<template>
    <div class="bg-theme-white min-h-screen flex flex-col">
        <LiveNow v-if="show_live_now" />
        <TheHeader />
        <nuxt class="flex-1 w-full" />
        <TheFooter />
    </div>
</template>

<script>
export default {
    data() {
        return {
            show_live_now: null
        }
    },
    async fetch() {
        const { data: globals } = await this.$directus.items('globals').readByQuery()
        this.show_live_now = globals.show_live_now
    }
}
</script>
