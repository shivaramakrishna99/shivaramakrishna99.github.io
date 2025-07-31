<template>
  <div>
    <section>
      <div class="text-center my-8 sm:my-12">
        <h1 class="not-italic">Projects</h1>
        <p class="italic font-serif">some not-so-messy ideas</p>
      </div>
    </section>

    <section>
      <div
        class="grid gap-4 grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3"
        v-if="projects.length"
      >
        <NuxtLink
          v-for="project in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="
          block group h-auto sm:h-48 border-2
          rounded-3xl px-8 py-12
          bg-flexoki-base-50 dark:bg-flexoki-base-900
          border-flexoki-base-100 dark:border-flexoki-base-950
          hover:bg-flexoki-paper dark:hover:bg-flexoki-dark-bg-2
          hover:border-flexoki-dark-pu-2 dark:hover:border-flexoki-light-pu-2 
          transition
          "
        >
          <h3 class="
          font-classic text-2xl sm:text-4xl italic 
          group-hover:text-flexoki-dark-pu-2 dark:group-hover:text-flexoki-light-pu-2
          transition
          ">
            {{ project.title }}
          </h3>
        </NuxtLink>


      </div>

      <div class="text-center" v-else>
        <h3>🚧</h3>
        <h3>
          Projects are typed up! <br />
          Check back soon for some cool things I've done.
        </h3>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch all projects in the `projects` folder
const projects = await queryContent('projects').find()
</script>
