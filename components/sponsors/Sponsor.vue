<template>
    <a :href="sponsor.url">
        <img :src="$asset(sponsor.file)" :alt="sponsor.title" class="rounded">
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
