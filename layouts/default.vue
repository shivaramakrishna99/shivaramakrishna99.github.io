<template>
  <!-- <head> -->
  <!-- <title>Shivaramakrishna Srinivasan</title> -->
  <!-- <meta name="description" content="In a scene from the Powers of Ten" /> -->
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1" /> -->
  <!-- <link rel="icon" href="/favicon.ico" /> -->
  <!-- <Html lang="en" /> -->
  <!-- <Meta property="og:title" content="Shivaramakrishna" /> -->
  <!-- <Meta
      property="og:description"
      content="In a scene from the Powers of Ten"
    /> -->
  <!-- <Meta property="og:image" content="/favicon.ico" /> -->
  <!-- </head> -->
  <body>
    <div class="flex flex-col min-h-screen bg-yellow-50">
      <!-- Sticky Header -->
      <div class="sticky top-0 z-10">
        <Nav />
      </div>

      <!-- Main Content -->
      <main class="flex-grow layout-container pt-12">
        <slot />
      </main>

      <!-- Sticky Footer -->
      <footer class="bg-yellow-50 shadow">
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
  title: 'Shivaramakrishna Srinivasan',
  ogTitle: 'Shivaramakrishna Srinivasan',
  description: 'In a scene from the Powers of Ten',
  ogDescription: 'In a scene from the Powers of Ten',
  ogImage:
    'https://github.com/shivaramakrishna99/shivaramakrishna99.github.io/blob/main/public/img/utils/srks.png',
  twitterCard: 'summary_large_image',
})
</script>
