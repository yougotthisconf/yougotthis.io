<template>
    <div class="prose">
        <ul>
            <li v-for="event in events" :key="event.slug">
                <a :href="event.redirect_url ? event.redirect_url : `/events/${event.slug}`">{{ event.title }} ({{ $moment(event.start).format('MMM Do YYYY') }})</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: []
        }
    },
    async created() {
        const { data: events } = await this.$directus.items('events').readByQuery({ 
            fields: ['slug', 'title', 'start', 'redirect_url', 'is_past'],
            filter: { is_past: { _eq: false } },
            sort: 'start'
        })
        this.events = events
    },
}
</script>