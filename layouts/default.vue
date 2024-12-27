<template>
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

</style>