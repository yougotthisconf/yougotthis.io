<template>
    <div>
        <div class="wrapper pt-16 mb-8">
            <div class="bg-green-500 p-4 mb-8">Todo: filters for content type, sorting by alphabetical or latest.</div>
            <h1 class="heading text-center">Library</h1>
            <ContentList :list="aboveFold" class="mt-8" />
        </div>

        <div class="bg-theme-main text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 140" class="bg-theme-white -mb-2 border-b border-theme-main">
                <path fill="var(--theme-main)" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            <div class="wrapper pb-4 pt-8 text-center">
                <h2 class="heading">Check out our collections!</h2>
                <p class="mt-2 mb-4">View our curated collections designed to help you navigate specific core skill areas.</p>
                <CollectionList />
                <n-link class="button mt-8 grid-rows-1" to="/collections">See all collections</n-link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290" class="bg-theme-white -mt-2 border-t border-theme-main">
                <path fill="var(--theme-main)" fill-opacity="1" d="M0,0L80,48C160,96,320,192,480,197.3C640,203,800,117,960,117.3C1120,117,1280,203,1360,245.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>

        </div>

        <div class="wrapper pt-8 pb-16">
            <ContentList :list="belowFold" />
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const videos = await $content('library/videos', { deep: true }).without(['body']).sortBy('date', 'desc').fetch()
        const people = await $content('people', { deep: true }).only(['name', 'avatar', 'dir']).fetch()

        const addTypes = [
            ...videos.map(v => ({ ...v, type: 'video' }))
        ]

        const addFullProfiles = addTypes.map(item => {
            let profiles = item.people.map(name => people.find(person => person.dir.split('/')[2] === name))
            profiles = profiles.map(profile => ({ ...profile, avatar: `${profile.dir}/${profile.avatar}` }))
            return { ...item, people: profiles }
        })

        const aboveFold = addFullProfiles.slice(0, 12)
        const belowFold = addFullProfiles.slice(12, addFullProfiles.length)

        return { aboveFold, belowFold }
    },
}
</script>
