<template>
  <body class="bg-flexoki-light-bg dark:bg-flexoki-dark-bg-2 text-flexoki-dark-ui dark:text-flexoki-light-ui">
    <div class="flex flex-col min-h-screen">
      <nav>
        <div class="sticky top-0 z-10">
        <Nav />
        </div>
      </nav>

      <main class="flex-grow layout-container pt-12">
        <slot />
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  </body>
</template>

<style scoped>
/* Optional styles for header and footer */
header,
footer {
  z-index: 10;
}
</style>

<script setup>
useSeoMeta({
  // Basic metadata
  title: 'Shivaramakrishna ivasan',
  description: 'Exploring the infinite scales of the Powers of Ten.',

  // Open Graph (OG) metadata for link previews
  ogTitle: 'srks',
  ogDescription: 'Exploring the infinite scales of the Powers of Ten.',
  ogImage: 'https://shivaramakrishna99.github.io/img/utils/srks.png',
  ogUrl: 'https://shivaramakrishna99.github.io',

  // Twitter Card metadata
  twitterCard: 'summary_large_image',
  twitterTitle: 'srks',
  twitterDescription: 'Exploring the infinite scales of the Powers of Ten.',
  twitterImage: 'https://shivaramakrishna99.github.io/img/utils/srks.png',

  // Additional metadata
  keywords: 'Shivaramakrishna, Powers of Ten, Nuxt, Vue, Portfolio',
  author: 'srks',
  robots: 'index, follow',
})
</script>
