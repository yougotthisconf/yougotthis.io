<template>
    <a :href="event.redirect_url || `/events/${event.slug}`">
        <div class="thumb">
            <img :src="`${$asset(event.cover.id)}?width=760`" alt="">
        </div>
        <h2 :data-title="event.title">{{ event.title }}</h2>
        <p v-if="showDescription">{{ event.description }}</p>
        <EventMeta :event="event" />
    </a>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true
        },
        showDescription: {
            type: Boolean,
            required: false,
            default: true
        }
    }
}
</script>

<style scoped>
a {
    @apply text-left transition;
    &:hover .thumb {
        @apply transition shadow-lg;
        transform: translate(0, -2px);
    }
    & .thumb:active {
        @apply transition shadow-none;
        transform: translate(2px, 2px);
    }
}
.thumb {
    @apply relative shadow rounded-lg overflow-hidden
}
h2 {
  @apply font-heading text-theme-main text-xl mt-2 mb-2;
  transform: translate3d(0,0,0) rotate(0);
  &:before {
    @apply absolute;
    content: attr(data-title);
    -webkit-text-stroke: 0.4em white;
    z-index: -1;
  }
}
p {
    @apply mb-2
}
.meta {
    @apply flex flex-wrap gap-x-4 gap-y-2 text-xs;
}
.info {
    @apply flex items-center gap-1;
    & svg {
        @apply h-4 w-4;
    }
    &:last-child {
        @apply gap-0.5;
    }
}
</style>
