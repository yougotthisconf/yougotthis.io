<template>
    <div>
        <SocialCard v-if="socialCard.is" :social-card="socialCard.slug" :title="title" :speakers='speakers' />

        <div v-else class="box !p-0 not-prose">
            <div class="top">
                <div class="meta">
                    <h2 class="font-normal">{{ title }}</h2>
                    <span v-if="speakers" class="mr-2" >{{ speakers }}</span>
                    <span v-if="start">
                        {{ $moment.utc(start).local().format('HH:mm') }}
                        {{ $moment.tz.guess(true).split('/')[1].split('_').join(' ') }}
                    </span>
                </div>
            </div>
            <div class="main">
                <p v-if="description" class="description" v-html="description"></p>
                <slot />
            </div>
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
            type: String,
            required: false,
            default: ''
        },
        bios: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        time() {
            return new Date(this.start)
        },
        socialCard() {
            return {
                slug: this.$route.params.slug,
                is: this.$route.name === 'events-slug-social'
            }
        }
    }
}
</script>

<style scoped>
.box {
    @apply mb-8;
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
    @apply !mt-0 !mb-0;
    flex-shrink: 0;
    & img {
        @apply rounded-full border-2 border-white w-16 shadow-sm;
        @apply !mt-0 !mb-0;
    }
}
.bio.not-prose p {
    @apply my-0;
}
</style>
