<template>
    <div class="box !p-0 not-prose">
        <div class="top">
            <div v-if="people.length > 0" class="img">
                <img v-for="person in people" :key="person.dir" :src="`${person.dir}/${person.avatar}`" :alt="person.title">
            </div>
            <div class="meta">
                <h2>{{ title }}</h2>
                <span v-if="people.length > 0" class="mr-2" >{{ people.map(p => p.title).join(', ') }}</span>
                <span v-if="start">
                    {{ $moment.utc(start).local().format('HH:mm') }}
                    {{ $moment.tz.guess(true).split('/')[1] }}
                </span>
            </div>
        </div>
        <div class="main">
            <p v-if="description" class="description">{{ description }}</p>
            <slot />
        </div>
        <div v-if="people.length > 0" class="people">
            <details v-for="person in people" :key="person.dir">
                <summary>
                    <span>About {{ person.title }}</span>
                    <span v-if="person.pronouns">({{ person.pronouns }})</span>
                </summary>
                <nuxt-content :document="person" class="bio not-prose my-0"></nuxt-content>
                <a v-if="person.twitter" :href="`https://twitter.com/${person.twitter}`" class="button text-sm mt-2">@{{ person.twitter }} on Twitter</a>
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
            required: false,
            default: ''
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
            people: []
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
    @apply p-4 flex items-center;
    & h2 {
        @apply font-heading text-2xl !my-0;
    }
    & .key {
        @apply flex flex-wrap space-x-4 !mt-2 !mb-0;
        & p {
            @apply !my-0;
        }
    }
}
.description {
    @apply p-4 border-t !my-0;
}
.people {
    @apply p-4 flex flex-col gap-2 border-t;
    & details {
        & summary {
            @apply font-bold cursor-pointer;
            & span:first-child {
                @apply ml-2;
            }
        }
    }
}
</style>

<style scoped>
.img {
    @apply flex-row gap-2 mr-4 hidden md:flex;
    flex-shrink: 0;
    & img {
        @apply rounded-full border-2 border-white w-16 shadow-sm;
    }
}
.bio.not-prose p {
    @apply my-0;
}
</style>
