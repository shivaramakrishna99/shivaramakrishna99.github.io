<template>
  <div>
    <ContentDoc path="/" />
    <section class="mb-12">
      <h2 class="text-4xl font-bold mb-6">Writing</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in writing"
          :key="item._id"
          class="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ item.description }}</p>
          <a
            :href="`/writing/${item.slug}`"
            class="text-blue-600 hover:text-blue-500 underline"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-4xl font-bold mb-6">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project._id"
          class="border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
          <a
            :href="`/projects/${project.slug}`"
            class="text-blue-600 hover:text-blue-500 underline"
          >
            View project
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const writing = await queryContent('writing').find()
const projects = await queryContent('projects').find()
</script>
