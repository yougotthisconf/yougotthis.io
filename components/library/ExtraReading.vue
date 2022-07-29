<template>
    <details class="box">
        <summary><span>{{ title }}</span></summary>
        <div class="text">
            <slot />
        </div>
    </details>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
details {
    @apply border-theme-main border;
    & summary {
        @apply font-bold cursor-pointer;
        & span {
            @apply ml-2;
        }
    }
}
.text p {
    @apply m-0 mt-4;
    &:first-child {
        @apply mt-2;
    }
}
</style>
