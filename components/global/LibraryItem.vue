<template>
    <div v-if="item" :class="itemClass">

        <iframe v-if="type === 'videos'" :src="`https://player.vimeo.com/video/${item.vimeo}?h=44d49687ad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen class="w-full" style="aspect-ratio: 16/9"></iframe>

        <n-link v-if="type === 'articles'" :to="`/library/${item.path.split('/').slice(-2)[0]}`" class="box not-prose">
            <img :src="`${item.dir}/${item.cover}`" alt="" class="cover">
            <div class="info">
                <p class="title">{{ item.title }}</p>
                <div class="meta">
                    <div class="images">
                        <img v-for="person in item.people" :key="person.title" :src="person.avatar" :alt="`Avatar of ${person.title}`" />
                    </div>
                    <p class="names">
                        <span>{{ item.people[0].title }}</span>
                        <span v-if="item.people.length > 1">+{{ item.people.length-1 }}</span>
                    </p>
                </div>
            </div>
        </n-link>

    </div>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true
        },
        itemClass: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            item: false
        }
    },
    computed: {
        type() {
            return this.path.split('/')[0]
        }
    },
    async created() {
        if(this.type === 'videos') {
            this.item = await this.$content('library', this.path, { deep: true }).fetch()
        }
        if(this.type === 'articles') {
            let item = await this.$content('library', this.path, 'index', { deep: true }).fetch()
            const people = await this.$content('people', { deep: true }).only(['title', 'avatar', 'dir']).fetch()
            let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
            profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
            item = { ...item, people: profiles }
            this.item = item
        }
    },
}
</script>

<style scoped>
.box {
    @apply p-0 grid sm:grid-cols-2 no-underline font-normal;
}
.cover {
    @apply col-span-1 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg mr-4;
}
.info {
    @apply col-span-1 p-3;
}
.title {
    @apply font-heading text-xl sm:text-lg lg:text-2xl !text-theme-alt;
}
.meta {
    @apply flex text-left mt-3 mb-3 sm:mb-0;
    & .images {
        @apply relative pl-8 mr-2;
        width: 2.125rem;
        & img {
            @apply rounded-full border-2 border-theme-white;
            @apply absolute left-0 z-10;
            --w: 2.125rem;
            width: var(--w);
            max-width: var(--w);
            min-width: var(--w);
            &:nth-child(2) {
                @apply ml-1.5 z-0;
            }
            &:nth-child(n+3) {
                @apply hidden;
            }
        }
    }
    & .names {
        @apply text-sm mt-1.5;
    }
}
</style>
