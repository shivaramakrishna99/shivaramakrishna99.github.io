<template>
    <head>
        <title>Shivaramakrishna Srinivasan</title>
        <meta name="description" content="In a scene from the Powers of Ten" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Html lang="en" />
        <Meta property="og:title" content="Shivaramakrishna" />
        <Meta property="og:description" content="In a scene from the Powers of Ten" />
        <Meta property="og:image" content="/favicon.ico" />
    </head>
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
</template>

<script setup>
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
/* Optional styles for header and footer */
header, footer {
    z-index: 10;
}
</style>