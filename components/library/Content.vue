<template>
    <n-link to="/">
        <div class="thumb">
            <img :src="item.cover" alt="">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path v-if="item.type == 'video'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    <path v-if="item.type == 'article'" fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />

                </svg>
                <span>{{ item.duration }} min {{ item.type }}</span>
            </span>
            <span v-if="featured" class="featured">Featured</span>
        </div>
        <div class="meta">
            <div class="images">
                <img v-for="person in item.people" :key="person.name" :src="person.avatar" :alt="`Avatar of ${person.name}`" />
            </div>
             <div>
                 <h3 class="text-sm">{{ item.title }}</h3>
                 <p>
                     <span>{{ item.people[0].name }}</span>
                     <span v-if="item.people.length > 1">+{{ item.people.length-1 }}</span>
                 </p>
             </div>
        </div>
    </n-link>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        type: {
            validator: (value) => ['video', 'article'].includes(value),
            required: true
        },
        featured: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.thumb {
    @apply relative shadow rounded-lg overflow-hidden
}
.icon, .featured {
    @apply absolute text-white text-xs px-2 py-1 rounded-md
}
.icon {
    @apply bottom-2 right-2 bg-theme-black flex items-center pl-1.5;
    & svg {
        @apply h-4 w-4 z-10 text-white mr-2;
    }
}
.featured {
    @apply top-2 left-2 bg-theme-main;
}
.meta {
    @apply flex gap-4 mt-4 pr-2 text-left;
    & .images {
        @apply relative pl-8;
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
    & h3 {
        @apply font-bold leading-tight;
    }
    & p {
        @apply text-sm mt-2 flex flex-wrap gap-x-2;
    }
}
</style>
