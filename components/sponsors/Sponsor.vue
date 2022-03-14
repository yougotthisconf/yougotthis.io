<template>
    <a :href="sponsor.url">
        <img :src="`${sponsor.dir}/${sponsor.file}`" :alt="sponsor.name" class="rounded">
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
