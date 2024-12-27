<template>
  <div>
    <ContentDoc path="/" />
    <!-- <section>
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project._path">
          <NuxtLink :to="project._path">{{ project.title }}</NuxtLink>
        </li>
      </ul>
    </section> -->

    <!-- <section>

  <h2>Recent Writing</h2>
<ul>
  <li v-for="article in writing" :key="article._path">
    <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
  </li>
</ul>
</section> -->

  </div>
</template>

<script setup>

const writing = await queryContent('writing').find()
const projects = await queryContent('projects').find()
</script>