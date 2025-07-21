<template>
  <div class="relative inline-block">
    <!-- Copy Button -->
    <button
      class="px-3 py-1 text-sm font-mono font-medium bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
      @click="copyText"
    >
      {{ copied ? 'Copied!' : 'Copy' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      copied: false,
    }
  },
  methods: {
    async copyText() {
      try {
        await navigator.clipboard.writeText(this.text)
        this.copied = true

        // Reset the copied state after 2 seconds
        setTimeout(() => {
          this.copied = false
        }, 2000)
      } catch (err) {
        console.error('Failed to copy text:', err)
      }
    },
  },
}
</script>

<style scoped>
button {
  transition: background-color 0.2s;
}
</style>
