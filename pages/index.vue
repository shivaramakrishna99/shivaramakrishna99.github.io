<template>
  <div>
    <ContentDoc path="/" />

    <section class="pb-12">
      <h3 class="font-light tracking-normal mb-6">Projects</h3>

      <div :class="{ 'blur-sm pointer-events-none': showModal }" class="grid grid-cols-1 sm:grid-cols-2 gap-6 transition duration-300">
        <button
          v-for="project in projects"
          :key="project._id"
          @click="openModal(project)"
          @click.self="closeModal"
          class="group flex flex-col text-left rounded-2xl border border-flexoki-light-ui group-hover:border-flexoki-light-bl bg-flexoki-50 p-6 shadow-sm transition-all hover:shadow-md"
        >
          <h3
            class="text-xl font-sans not-italic font-semibold text-gray-800 group-hover:text-flexoki-light-bl transition-colors"
          >
            {{ project.title }}
          </h3>
        </button>
      </div>

      <!-- Modal -->
      <transition name="fade" appear>
        <div
          v-if="showModal"
          @click.self="closeModal"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4"
        >
          <transition
            name="modal"
            appear
          >
            <div
              class="relative w-full max-w-2xl rounded-xl bg-flexoki-paper dark:bg-flexoki-dark-bg px-8 py-12 shadow-lg transition-all"
            >
              <!-- Close X Button -->
              <button
                @click="closeModal"
                class="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h3 class="text-5xl font-sans font-bold tracking-tight not-italic text-gray-900 mb-4">
                {{ selectedProject?.title }}
              </h3>
              <p class="text-gray-700 whitespace-pre-line">
                {{ selectedProject?.description }}
              </p>
            </div>
          </transition>
        </div>
      </transition>
    </section>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const projects = await queryContent('projects').find()

const showModal = ref(false)
const selectedProject = ref(null)

function openModal(project) {
  selectedProject.value = project
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedProject.value = null
}

// Optional: close modal on ESC key
function onKey(e) {
  if (e.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
/* Fade for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom-fade for modal panel */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>