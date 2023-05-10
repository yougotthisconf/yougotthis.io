<template>
    <a :href="sponsor.sponsors_slug.url">
        <img :src="$asset(sponsor.sponsors_slug.file)" :alt="sponsor.sponsors_slug.title" class="rounded">
    </a>
</template>

<script>
export default {
    props: {
        sponsor: {
            type: Object,
            required: true
        }
    }
}
</script>
