<template>
  <footer>
    <div class="py-12">
      <div class="layout-container">
        <h5>Connect</h5>
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
                size="12px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
              <span v-if="copied.email1" class=" text-flexoki-light-ui-3">Copied!</span>
            </button>
          </p>
          <p class="text-sm flex items-center space-x-2">
            <a href="mailto:s5srinivasan@ucsd.edu">
              <code>s5srinivasan@ucsd.edu</code>
            </a>
            <button
              @click="copyToClipboard('s5srinivasan@gmail.com', 'email2')"
              class="ml-2 flex items-center space-x-1"
            >
              <Icon
                name="tabler:copy"
                size="12px"
                class="text-flexoki-dark-ui dark:text-flexoki-light-ui transform hover:scale-95 hover:text-flexoki-dark-ui dark:text-flexoki-light-ui transition duration-300"
              />
              <span v-if="copied.email2" class="text-flexoki-light-ui-3">Copied!</span>
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="py-3 border-t-2 border-t-flexoki-light-bg-2 dark:border-t-flexoki-dark-ui-2">
      <div class="layout-container">
        <div class="flex justify-between text-sm sm:text-base text-flexoki-semantic-text-muted">
          <div>
            <span class="font-serif italic">In a 10<sup>1</sup>m frame among the many Powers of Ten</span>
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