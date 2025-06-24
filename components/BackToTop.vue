<template>
  <transition name="fade">
    <button
      v-if="show"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 transition"
      aria-label="Back to top"
    >
    <Icon name="typcn:arrow-up" class="h-12 w-12 text-flexoki-dark-ui-3 dark:text-flexoki-light-ui-3 shadow-lg" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
let lastScrollY = 0

function onScroll() {
  const currentY = window.scrollY
  show.value = currentY > 400 && currentY > lastScrollY
  lastScrollY = currentY
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  lastScrollY = window.scrollY // Initialize after mount
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>