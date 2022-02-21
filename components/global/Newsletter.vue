<template>
    <div class="bg-theme-main text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 140" class="bg-theme-white -mb-2 border-b border-theme-main">
                <path fill="var(--theme-main)" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            <div class="wrapper pb-4 pt-8 text-center">
                <h2 class="heading">Subscribe to our newsletter</h2>
                <p class="mt-2 mb-4">Get (infrequent) news about You Got This! Opt-out in one click.</p>
                <form action="https://buttondown.email/api/emails/embed-subscribe/yougotthisconf" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/yougotthisconf', 'popupwindow')">
                    <input id="bd-email" aria-label="Email" required placeholder="Enter your email" name="email" class="text-input" />
                    <input type="hidden" name="tag" value="ygt-site" />
                    <input type="hidden" value="1" name="embed" />
                    <button type="submit" class="button">Subscribe</button>
                </form>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290" class="bg-theme-white -mt-2 border-t border-theme-main">
                <path fill="var(--theme-main)" fill-opacity="1" d="M0,0L80,48C160,96,320,192,480,197.3C640,203,800,117,960,117.3C1120,117,1280,203,1360,245.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </div>
</template>

<style scoped>
form {
    @apply flex flex-col gap-4;
    @apply md:flex-row justify-center;
}
input#bd-email {
    @apply w-full;
    @apply md:w-64;
    @apply text-theme-black;
}
</style>
