<template>
  <header class="bg-flexoki-paper">
    <div
      class="layout-container py-12 flex flex-col space-y-2 items-start sm:items-center sm:flex-row sm:justify-between"
    >
      <NuxtLink to="/">
        <div class="flex items-center">
          <NuxtImg
            src="/img/utils/srks.png"
            alt="Logo"
            class="h-10 w-10 mr-2"
          />
          <span class="text-xl font-display">Shivaramakrishna Srinivasan</span>
        </div>
      </NuxtLink>
      <nav class="flex items-start space-x-4">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.url"
          class="rounded-lg pr-3 hover:text-cyan-500 transition duration-300 ease-in-out"
        >
          {{ item.title }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title: 'About', url: '/about' },
        { title: 'Writing', url: '/writing' },
        { title: 'Projects', url: '/projects' },
      ],
    }
  },
}
</script>
