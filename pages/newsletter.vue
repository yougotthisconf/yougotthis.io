<template>
    <div class="wrapper py-4">
        <NewsletterBlock title="You Got This! Newsletter" text="Get (infrequent) news about You Got This! Opt-out in one click." />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'

export default {
    head() {
        return headFactory({
            title: 'Newsletter',
            path: this.$route.path
        })
    },
}
</script>

<style scoped>
.newsletter {
    @apply px-4 py-8;
    @apply rounded-lg shadow bg-theme-main;
    @apply text-white text-center;

}
</style>
