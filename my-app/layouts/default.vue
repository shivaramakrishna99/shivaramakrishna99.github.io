<template>
    <div>
      <Nav />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Nav from '~/components/Nav.vue';
  import Footer from '~/components/Footer.vue';
  </script>
  
  <style scoped>
  main {
    min-height: calc(100vh - 100px); /* Adjust based on nav/footer height */
  }
  </style>