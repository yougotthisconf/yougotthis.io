<template>
    <header>
        <div id="desktop">
            <nav>
                <div>
                    <n-link v-for="link in nav.primary" :key="link.label" :to="link.path">{{ link.label }}</n-link>
                </div>
                <n-link to="/">
                    <img src="/img/brand/logo-white-square.svg" alt="You Got This!">
                </n-link>
                <div>
                    <a v-for="link in nav.secondary" :key="link.label" :href="link.url">{{ link.label }}</a>
                </div>
            </nav>
        </div>
        <div id="mobile">
            <div class="visible">
                <n-link to="/">
                    <img src="/img/brand/logo-white-square.svg" alt="You Got This!">
                </n-link>
                <button class="button" @click="mobileMenuOpen = !mobileMenuOpen">{{ mobileMenuOpen ? 'Hide' : 'Show' }} Menu</button>
            </div>
            <nav v-if="mobileMenuOpen">
                <div id="primary">
                    <n-link v-for="link in nav.primary" :key="link.label" :to="link.path">{{ link.label }}</n-link>
                </div>
                <div id="secondary">
                    <a v-for="link in nav.secondary" :key="link.label" :href="link.url">{{ link.label }}</a>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            nav: {
                primary: [
                    { label: 'Library', path: '/library' },
                    { label: 'Events', path: '/events' }
                ],
                secondary: [
                    { label: 'Newsletter', url: '/newsletter' },
                    { label: 'Twitter', url: 'https://twitter.com/yougotthisconf' },
                    { label: 'Instagram', url: 'https://instagram.com/yougotthisconf' },
                ]
            },
            mobileMenuOpen: false
        }
    }
}
</script>

<style scoped>
header {
    @apply bg-theme-main text-white border-b border-theme-dark;
    @apply text-sm;
    @apply p-4;
}

img {
    @apply w-12;
}

#desktop {
    @apply px-4 h-12;
    @apply hidden md:flex;
    & nav {
        @apply w-full relative;
        @apply flex justify-between items-center;
        & > div {
            @apply flex gap-4;
        }
        & > a {
            @apply absolute;
            @apply left-0 right-0 top-0 m-auto;
            @apply w-12;
        }
    }
}
#mobile {
    @apply md:hidden;
    & .visible {
        @apply flex justify-between items-center;
    }
    & nav {
        @apply pt-12
    }
    & #primary {
        @apply flex flex-col mb-8;
        @apply text-lg gap-2;
    }
    & #secondary {
        @apply flex flex-row flex-wrap gap-x-6 gap-y-2;
        @apply text-base;
    }
}
</style>
