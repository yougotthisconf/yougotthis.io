<template>
  <div class="mb-12">
    <div ref="card">
      <social-card-broadcasting-service v-if="socialCard == 'broadcasting-service'" :title="title" :speakers="speakers" />
    </div>
    <button class="mt-4 button bright w-full block" @click="download">Download</button>
  </div>
</template>

<script>
export default {
  props: {
    socialCard: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    speakers: {
      type: Array,
      required: true
    }
  },
  methods: {
    async download() {
      const el = this.$refs.card
      const canvas = await this.$html2canvas(el, { type: 'dataURL' })
      const a = document.createElement("a")
      a.href = canvas
      a.download = `social-${this.title.toLowerCase().split(':').join('').split(' ').join('-')}.png`
      a.click()
    }
  }
}
</script>