<template>
    <a :href="event.url || event.dir">
        <div class="thumb">
            <img :src="`${event.dir}/${event.cover}`" alt="">
        </div>
        <h2 :data-title="event.title">{{ event.title }}</h2>
        <p>{{ event.description }}</p>
        <EventMeta :event="event" />
    </a>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true
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
  @apply font-heading text-theme-main text-xl md:text-2xl mt-2;
  transform: translate3d(0,0,0) rotate(0);
  &:before {
    @apply absolute;
    content: attr(data-title);
    -webkit-text-stroke: 0.4em white;
    z-index: -1;
  }
}
p {
    @apply my-2
}
</style>
