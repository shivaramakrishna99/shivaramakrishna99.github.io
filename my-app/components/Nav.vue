<template>
  <header class="bg-red-500">
    <div class="layout-container flex items-center justify-between">
    <NuxtLink to="/">
    <div class="flex items-center">
      <NuxtImg src="/utils/srks.png" alt="Logo" class="h-8 w-8 mr-2" />
      <span class="text-xl font-bold">Shivaramakrishna</span>
    </div>
  </NuxtLink>
    <nav class="flex space-x-4">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.url"
        class="rounded-lg px-3 py-2 font-display text-slate-700 font-medium  hover:text-cyan-600 transition duration-300 ease-in-out"
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
        { title: 'Projects', url: '/projects' },
        { title: 'Writing', url: '/writing' },
      ],
    };
  },
};
</script>
