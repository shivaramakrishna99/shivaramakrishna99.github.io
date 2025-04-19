<template>
  <div>
    <h3>Projects</h3>
    <ul class="space-y-4 list-none indent-0" v-if="projects.length">
      <li
        class="hover:text-flexoki-light-bl transition duration-300 ease-in-out"
        v-for="project in projects"
        :key="project.slug"
      >
      <span class="font-mono">
      {{
          project.created
          }}
          &#8226;
        </span>
        <span class="underline">
        <NuxtLink :to="`/projects/${project.slug}`">
          {{
          project.title
          }}
        </NuxtLink>
      </span> 
      </li>
    </ul>
    <div class="text-center" v-else>
      <h3>🚧</h3>
      <h3>
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
