<template>
    <div class="box not-prose">
        <div class="top">
            <h2>{{ title }}</h2>
            <div class="key">
                <p v-if="people.length > 0">{{ people.map(p => p.name).join(', ') }}</p>
                <p>
                    {{ $moment.utc(start).local().format('HH:mm') }}
                    {{ $moment.tz.guess(true).split('/')[1] }}
                </p>
            </div>
        </div>
        <div class="main">
        <p v-if="description" class="description">{{ description }}</p>
        <slot />
        </div>
        <div v-if="people.length > 0" class="people">
            <details v-for="person in people" :key="person.dir">
                <summary><span>About {{ person.name }}</span></summary>
                <nuxt-content :document="person"></nuxt-content>
                <a v-if="person.twitter" :href="`https://twitter.com/${person.twitter}`" class="button text-xs mt-2">@{{ person.twitter }} on Twitter</a>
            </details>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        start: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ''
        },
        speakers: {
            type: Array,
            required: false,
            default: () => []
        },
    },
    data() {
        return {
            people: false
        }
    },
    computed: {
        time() {
            return new Date(this.start)
        }
    },
    async created() {
        if(this.speakers.length > 0) {
            this.people = await this.$content('people', { deep: true }).where({dir: {'$in': this.speakers.map(p => `/people/${p}`)}}).fetch()
        }
    }
}
</script>

<style scoped>
.box {
    @apply my-4;
}
.top {
    @apply p-4;
    & h2 {
        @apply font-heading text-xl;
    }
    & .key {
        @apply flex flex-wrap space-x-4 mt-2;
    }
}
.description {
    @apply p-4 border-t;
}
.people {
    @apply p-4 flex flex-col gap-2 border-t;
    & details {
        & summary {
            @apply font-bold cursor-pointer;
            & span {
                @apply ml-2;
            }
        }
    }
}
</style>
