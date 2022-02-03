<template>
    <div>
        <div class="wrapper">
            <h1 class="my-12 font-heading text-3xl">Components</h1>
            <div class="grid grid-cols-2 gap-4">
                <Collection title="You Got This In Cyberspace" summary="Talks and workshops from our You Got This In Cyberspace event." />
                <Collection title="Get the Job You Deserve" summary="Strategies and tips for finding and getting your next job." />
            </div>
            <div class="mt-8 grid grid-cols-4 gap-4">
                <Content title="It's Not Your Job To Love Your Job" :people="['Keziyah Lewis']" :length="28" type="video" />
                <Content title="Planning and Preparing For Your Next Role" :people="['Rachel Lee Nabors']" :length="35" type="video" :featured="true" />
                <Content title="Using Accessible Language" :people="['Amy Dickens']" :length="43" type="video" />
                <Content title="Lending Privilege" :people="['Annjuan Simmons']" :length="45" type="writing" />
            </div>
        </div>
        <div class="max-w-2xl mx-auto py-24">
            <Example />
        </div>
    </div>
</template>
