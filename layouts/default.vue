<!-- <template>
    <div class="bg-yellow-50">
        <Nav />
        <main class="layout-container pt-12">
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
    min-height: calc(100vh - 100px);
    /* Adjust based on nav/footer height */
}

</style> -->

<template>
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