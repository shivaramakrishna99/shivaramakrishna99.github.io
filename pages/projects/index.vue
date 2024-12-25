<template>
    <div>
      <h1>Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.slug">
          <NuxtLink :to="`/projects/${project.slug}`">{{ project.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  
  // Fetch all articles
  const projects = await queryContent('projects').find();
  </script>