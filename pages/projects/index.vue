<template>
  <div>
    <ul v-if="projects.length">
      <li v-for="project in projects" :key="project.slug">
        <NuxtLink :to="`/projects/${project.slug}`">{{
          project.title
        }}</NuxtLink>
      </li>
    </ul>
    <div class="text-center" v-else>
      <h3>🚧</h3>
      <h3 class="font-classic italic">
        Projects are under construction! <br />
        Check back soon for some cool things I've done.
      </h3>
    </div>
  </div>
</template>

<script setup>
// Fetch all articles in the `projects` folder
const projects = await queryContent('projects').find()
</script>
