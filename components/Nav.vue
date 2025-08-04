<template>
  <header>
    <div class="mt-4 sm:mt-8 py-2 sm:py-6 mx-auto max-w-5xl">
    <div
    class="layout-container flex flex-row space-y-2 items-end justify-between"
    >
      <NuxtLink to="/">
        <div class="flex items-center">
          <NuxtImg
            src="/img/utils/srks.png"
            alt="Logo"
            class="h-10 w-10 sm:h-12 sm:w-12 mr-2 rounded-full shadow-none"
          />
          <span class="sm:text-xl font-title hidden sm:inline">Shivaramakrishna Srinivasan</span>
          <span class="text-lg sm:hidden font-title font-black">Shiva</span>
        </div>
      </NuxtLink>
      <nav class="flex items-start space-x-2 sm:space-x-4">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.url"
          class="rounded-lg pr-4 font-bold text-base sm:text-lg font-sans hover:text-flexoki-light-bl transition duration-300 ease-in-out"
        >
          {{ item.title }}
        </NuxtLink>
        <button
            @click="toggleDarkMode"
            class="rounded-lg text-gray-800 dark:text-gray-200 transition duration-300"
          >
            <Icon
              name="proicons:dark-theme"
              size="24px"
            />
          </button>
      </nav>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title: 'Blog', url: '/writing' },
        { title: 'Projects', url: '/projects' },
        // { title: 'Resume', url: '/resume' },
      ],
    }
  },
  computed: {
    isDarkMode() {
      return document.documentElement.classList.contains('dark')
    },
  },
  methods: {
    toggleDarkMode() {
      const html = document.documentElement
      if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      } else {
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    },
  },
  mounted() {
    // Initialize theme based on localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
}
</script>
