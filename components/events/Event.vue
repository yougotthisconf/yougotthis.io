<template>
    <a :href="event.redirect_url || `/events/${event.slug}`">
        <div class="thumb">
            <img :src="`${$asset(event.cover.id)}?width=760`" alt="">
        </div>
        <h2 :data-title="event.title">{{ event.title }}</h2>
        <p v-if="showDescription">{{ event.description }}</p>
        <div class="meta">
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span>{{ event.location }}</span>
            </div>
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
                <span v-if="!event.end">{{ $moment(event.start).format('MMM Do YYYY') }}</span>
                <span v-if="event.end">
                    {{ $moment(event.start).format('MMM Do') }} - {{ $moment(event.end).format('Do YYYY') }}
                </span>
            </div>
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clip-rule="evenodd" />
                </svg>
                <span>{{ event.type }}</span>
            </div>
        </div>
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
