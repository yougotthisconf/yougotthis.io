<template>
  <div class="aspect-w-16 aspect-h-9 bg-[#00B2EF] flex flex-col justify-between">
    <div class="p-12 !text-white font-heading text-4xl">
      <h2 class="-m-2">{{ title }}</h2>
      <div class="!mt-4 flex gap-4 items-center">
        <img v-for="person in speakers" :key="person.dir" :src="`${person.dir}/${person.avatar}`" class="w-24 !m-0 rounded-full">
        <p>{{ speakers.map(s => s.title).join(' & ') }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-end">
      <img src="bottom.png" class="!m-0">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    speakers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.prose h2 {
  @apply !m-0 !-mt-2 !text-white font-normal;
}
.prose p {
  @apply !m-0 !ml-4 !text-white;
}
</style>