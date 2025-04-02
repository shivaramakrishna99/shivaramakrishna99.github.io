<template>
  <header>
    <div class="bg-flexoki-light-bg dark:bg-flexoki-dark-bg bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md dark:backdrop-blur bg-clip-padding border-none sm:border-2 border-flexoki-light-bg-2 dark:border-flexoki-dark-bg-2 rounded-3xl mt-2 sm:mt-6 py-2 sm:py-6 mx-auto max-w-5xl">
    <div
    class="layout-container  flex flex-col space-y-2 items-start sm:items-center sm:flex-row sm:justify-between"
    >
      <NuxtLink to="/">
        <div class="flex items-center">
          <NuxtImg
            src="/img/utils/srks.png"
            alt="Logo"
            class="h-10 w-10 mr-2 rounded-full shadow-none"
          />
          <span class="text-xl font-title font-medium">Shivaramakrishna Srinivasan</span>
        </div>
      </NuxtLink>
      <nav class="flex items-start space-x-4">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.url"
          class="rounded-lg pr-4 font-normal hover:text-flexoki-light-bl transition duration-300 ease-in-out"
        >
          {{ item.title }}
        </NuxtLink>
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
        { title: 'Projects', url: '/projects' },
        { title: 'Writing', url: '/writing' },
        // { title: 'Resume', url: '/resume' },
      ],
    }
  },
}
</script>
