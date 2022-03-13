<template>
    <div class="bg-theme-main text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path transform="scale(1, -1) translate(0, -100)"  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
            </svg>

            <div class="wrapper py-16 text-center">
                <h2 class="heading">Subscribe to our newsletter</h2>
                <p class="mt-2 mb-4">Get (infrequent) news about You Got This! Opt-out in one click.</p>
                <form action="https://buttondown.email/api/emails/embed-subscribe/yougotthisconf" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/yougotthisconf', 'popupwindow')">
                    <input id="bd-email" aria-label="Email" required placeholder="Enter your email" name="email" class="text-input" />
                    <input type="hidden" name="tag" value="ygt-site" />
                    <input type="hidden" value="1" name="embed" />
                    <button type="submit" class="button">Subscribe</button>
                </form>
            </div>

             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="h-6 w-full bg-theme-white">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--theme-main)"></path>
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
