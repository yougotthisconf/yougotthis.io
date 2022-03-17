git<template>
    <footer class="bg-white pb-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 222" class="bg-white">
            <path fill="var(--theme-white)" d="M0,68.4061988 L40,57.7061988 C80,47.4061988 160,25.4061988 240,25.7061988 C320,25.4061988 400,47.4061988 480,73.7061988 C560,100.406199 640,132.406199 720,127.106199 C800,121.406199 880,79.4061988 960,73.7061988 C1040,68.4061988 1120,100.406199 1200,105.706199 C1280,111.406199 1360,89.4061988 1400,79.1061988 L1440,68.4061988 L1440,0 L0,0 L0,68.4061988 Z"></path>
        </svg>

        <div class="wrapper grid lg:grid-cols-3 lg:gap-10">
            <div>
                <n-link to="/">
                    <img src="/img/brand/logo-pink-square.svg" alt="You Got This!" class="h-16 mb-4">
                </n-link>
                <p class="text-lg text-theme-main font-bold">You Got This is a learning hub focused on core skills needed for a happy and healthy work life.</p>
                <p class="text-theme-main text-sm font-bold mt-2">A project by Kevin Lewis (<a href="https://twitter.com/_phzn">@_phzn</a>)</p>
            </div>
            <div class="pt-6 lg:pt-20 lg:col-span-2">
                <ul class="flex flex-wrap lg:text-xl gap-6 mb-12 mt-6 lg:mt-0">
                    <li>
                        <n-link to="/library">Content Library</n-link>
                    </li>
                    <li>
                        <n-link to="/events">Upcoming Events</n-link>
                    </li>
                    <li>
                        <n-link to="/contribute">Speak or Write for Us</n-link>
                    </li>
                    <li>
                        <n-link to="/sponsors/info">Sponsor You Got This</n-link>
                    </li>
                    <li>
                        <n-link to="/conduct">Code of Conduct</n-link>
                    </li>
                </ul>
                <ul class="flex flex-wrap gap-6">
                    <li>
                        <a href="https://twitter.com/yougotthisconf">Twitter</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/yougotthisconf">Instagram</a>
                    </li>
                    <li>
                        <a href="/newsletter">Newsletter</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/Z9QHcPxXe3">Discord</a>
                    </li>
                    <li>
                        <a href="mailto:kevin@yougotthis.io">Email Us</a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
</template>
