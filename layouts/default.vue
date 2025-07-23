<template>
  <div class="bg-flexoki-light-bg dark:bg-flexoki-dark-bg text-flexoki-dark-ui dark:text-flexoki-light-ui">
    <BackToTop />
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
  </div>
</template>

<style scoped>
/* Optional styles for header and footer */
header,
footer {
  z-index: 10;
}

</style>

<script setup>
import BackToTop from '~/components/BackToTop.vue';

useSeoMeta({
  // Basic metadata
  title: 'Shivaramakrishna Srinivasan',
  description: 'Lounging in a 10m frame within the many Powers of Ten',

  // Open Graph (OG) metadata for link previews
  ogTitle: 'Shivaramakrishna Srinivasan',
  ogDescription: 'Lounging in a 10m frame within the many Powers of Ten',
  ogImage: 'https://shivaramakrishna99.github.io/img/utils/srks.png',
  ogUrl: 'https://shivaramakrishna99.github.io',

  // Twitter Card metadata
  twitterCard: 'summary_large_image',
  twitterTitle: 'Shivaramakrishna Srinivasan',
  twitterDescription: 'Lounging in a 10m frame within the many Powers of Ten',
  twitterImage: 'https://shivaramakrishna99.github.io/img/utils/srks.png',

  // Additional metadata
  keywords: 'Shivaramakrishna, Srinivasan, UC San Diego, Bioengineering, Portfolio',
  author: 'Shivaramakrishna Srinivasan',
  robots: 'index, follow',
})
</script>
