<template>
    <section class="text-center bg-white pt-8 md:pt-16">
        <div class="max-w-3xl mx-auto px-4 mt-4 pb-4">
            <h1 class="heading">{{ config.description }}</h1>
            <h2 class="text-md mt-4">We hope you find value in our free <a href="/library">content library</a> and inclusive community <a href="/events">events</a>.</h2>
            <div class="close bg-theme-main text-white text-center p-4 mt-4 rounded-md">
                You Got This is ending. <a class="underline" href="https://lws.io/blog/you-got-this-closing">Read more here.</a>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 222" class="bg-theme-white w-full">
            <path fill="white" d="M0,68.4061988 L40,57.7061988 C80,47.4061988 160,25.4061988 240,25.7061988 C320,25.4061988 400,47.4061988 480,73.7061988 C560,100.406199 640,132.406199 720,127.106199 C800,121.406199 880,79.4061988 960,73.7061988 C1040,68.4061988 1120,100.406199 1200,105.706199 C1280,111.406199 1360,89.4061988 1400,79.1061988 L1440,68.4061988 L1440,0 L0,0 L0,68.4061988 Z"></path>
        </svg>
    </section>
</template>

<script>
import config from '@/config'
export default {
    data() {
        return {
            config
        }
    }
}
</script>


<style scoped>
h2 {
    margin-bottom: calc(1em + 2vw);
}
h2 a {
    @apply underline;
}
</style>
