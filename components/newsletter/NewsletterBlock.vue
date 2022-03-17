<template>
    <div class="newsletter not-prose">
        <h2 class="heading">{{ title }}</h2>
        <p class="mt-2 mb-4">{{ text }}</p>
        <NewsletterForm />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.newsletter {
    @apply px-4 py-8;
    @apply rounded-lg shadow bg-theme-main;
    @apply text-white text-center;
}

.newsletter h2, .newsletter p {
    @apply !text-white;
}
</style>
