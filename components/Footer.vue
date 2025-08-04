<template>
  <footer>
    <div>
      <hr class="border border-flexoki-light-bg-2 dark:border-flexoki-dark-ui-2"></hr>
      <div class="layout-container py-24">
        <h3>Connect</h3>
        <div class="flex flex-col space-y-2 sm:justify-between items-start">
          <div class="flex justify-start items-center space-x-4">
            <a
              href="https://github.com/shivaramakrishna99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="mdi:github"
                size="32px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/srks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="mdi:linkedin"
                size="32px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
            </a>
            <a
              href="https://x.com/srinivason99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="mdi:twitter"
                size="32px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
            </a>
          </div>
          <p class="text-sm flex items-center space-x-2">
            <a href="mailto:shivaramakrishna.srinivasan@gmail.com">
              <code>shivaramakrishna.srinivasan@gmail.com</code>
            </a>
            <button
              @click="copyToClipboard('shivaramakrishna.srinivasan@gmail.com', 'email1')"
              class="ml-2 flex items-center space-x-1"
            >
              <Icon
                name="tabler:copy"
                size="14px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
              <span v-if="copied.email1" class=" pl-2 text-flexoki-light-tx dark:text-flexoki-dark-tx font-mono">Copied!</span>
            </button>
          </p>
          <p class="text-sm flex items-center space-x-2">
            <a href="mailto:s5srinivasan@ucsd.edu" class="">
              <code>s5srinivasan@ucsd.edu</code>
            </a>
            <button
              @click="copyToClipboard('s5srinivasan@gmail.com', 'email2')"
              class="ml-2 flex items-center space-x-1"
            >
              <Icon
                name="tabler:copy"
                size="14px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
              <span v-if="copied.email2" class=" pl-2 text-flexoki-light-tx dark:text-flexoki-dark-tx font-mono">Copied!</span>
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="py-3 border-t-2 border-t-flexoki-light-bg-2 dark:border-t-flexoki-dark-ui-2">
      <div class="layout-container">
        <div class="flex justify-between items-center text-sm sm:text-base text-flexoki-semantic-text-muted">
          <div>
            <span class="font-serif italic">Lounging in a 10<sup>1</sup>m frame within <br class="inline sm:hidden">the many Powers of Ten</span>
          </div>
          <div>
            <span class="font-mono text-xs sm:text-sm">{{ currentMonth }} {{ currentYear }}</span>
          </div>
        </div>
      </div>
      </div>
  </footer>
</template>

<script setup>
import { reactive } from 'vue'

// Reactive state to track which email was copied
const copied = reactive({
  email1: false,
  email2: false,
})

// Function to copy email to clipboard
function copyToClipboard(email, key) {
  navigator.clipboard.writeText(email).then(
    () => {
      copied[key] = true
      setTimeout(() => {
        copied[key] = false
      }, 3000) // Reset after 3 seconds
    },
    (err) => {
      console.error('Failed to copy text: ', err)
    }
  )
}
// Get current year and month
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.toLocaleString('default', { month: 'short' })
</script>