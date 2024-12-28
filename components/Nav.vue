<template>
  <header class="bg-yellow-50">
    <div class="layout-container flex flex-col items-center sm:flex-row sm:justify-between">
    <NuxtLink to="/">
    <div class="flex items-center">
      <NuxtImg src="/img/utils/srks.png" alt="Logo" class="h-8 w-8 mr-2" />
      <span class="text-xl font-bold">Shivaramakrishna</span>
    </div>
  </NuxtLink>
    <nav class="flex space-x-4">
      <NuxtLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.url"
        class="rounded-lg px-3 py-2 sm:py-10 font-sans font-extrabold text-slate-700 hover:text-sky-700 transition duration-300 ease-in-out"
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
        { title: 'Projects', url: '/projects' }
      ],
    };
  },
};
</script>
