<template>
    <div>
        <div class="wrapper pt-16 mb-16">
            <div class="bg-green-500 p-4 mb-8">Todo: filters for content type, sorting by alphabetical or latest.</div>
            <h1 class="heading text-center">Library</h1>
            <ContentList :list="aboveFold" class="mt-8" />
        </div>

        <div class="bg-theme-main text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path transform="scale(1, -1) translate(0, -100)"  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
            </svg>

            <div class="wrapper py-16 text-center">
                <h2 class="heading">Check out our collections!</h2>
                <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
                <CollectionList :list="collections" collection-class="lg:last:hidden" />
                <n-link class="button mt-8 grid-rows-1" to="/collections">See all collections</n-link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
            </svg>

        </div>

        <div class="wrapper py-16">
            <ContentList :list="belowFold" />
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        let content = await $content('library', { deep: true }).without(['body']).sortBy('date', 'desc').fetch()
        const collections = await $content('collections', { deep: true }).without(['body']).where({ type: { $ne: 'event' } }).sortBy('highlight', 'desc').sortBy('date', 'desc').limit(4).fetch()
        const people = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()

        content = content.map(item => {
            let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
            profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
            return { ...item, people: profiles }
        })

        const aboveFold = content.slice(0, 12)
        const belowFold = content.slice(12, content.length)

        return { aboveFold, belowFold, collections }
    },
}
</script>
