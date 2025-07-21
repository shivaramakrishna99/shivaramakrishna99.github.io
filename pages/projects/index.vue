<template>
  <div>
    <h3>Projects</h3>

<div v-if="projects.length" class="masonry-grid gap-6">
      <div
        v-for="project in projects"
        :key="project.slug"
        class="break-inside-avoid mb-6 rounded-2xl border border-flexoki-light-accent bg-flexoki-light-bg hover:border-flexoki-light-bl hover:bg-white transition-all shadow-sm hover:shadow-md p-6"
      >
        <NuxtLink :to="`/projects/${project.slug}`" class="block group">
          <h3 class="text-xl font-semibold text-flexoki-light-tx group-hover:text-flexoki-light-bl transition">
            {{ project.title }}
          </h3>
          <p class="text-sm text-flexoki-light-muted mt-2 whitespace-pre-line">
            {{ project.description || 'No description available yet.' }}
          </p>
        </NuxtLink>
      </div>
    </div>


    <div v-else class="text-center py-12 text-flexoki-light-muted">
      <div class="text-4xl mb-4">🚧</div>
      <h3 class="text-lg">
        Projects are being written up! <br />
        Check back soon for some cool things I've done.
      </h3>
    </div>
  </div>
</template>

<script setup>
// Fetch all projects in the `projects` folder
const projects = await queryContent('projects').find()
</script>
