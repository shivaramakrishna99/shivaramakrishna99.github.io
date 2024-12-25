<template>
  <div>
    <h1>Hi! I'm Shivaramakrishna, or Shiva for short.</h1>
    <section>
      <p>
        I’m a second-year M.S. Bioengineering student at UC San Diego and a Graduate Student Researcher in the Subramaniam Lab. 
      </p>
      <p>
        My research focuses on leveraging large language models for precise cell-type annotation in single-cell RNA-seq data. Additionally, I'm developing deep learning methods to characterize cellular states in disease progression for my master's thesis.
      </p>
    </section>

  <div>
    <h1 class="font-serif italic text-3xl">This is Sentinel (font-serif)</h1>
    <p class="font-sans text-lg">This is Satoshi (font-sans)</p>
    <h2 class="font-display text-xl">This is Work Sans (font-display)</h2>
    <code class="font-mono">This is JetBrains Mono (font-mono)</code>
  </div>
    
    <section>
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project._path">
          <NuxtLink :to="project._path">{{ project.title }}</NuxtLink>
        </li>
      </ul>
    </section>

    <section>

  <h2>Recent Writing</h2>
<ul>
  <li v-for="article in writing" :key="article._path">
    <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
  </li>
</ul>
</section>

  </div>
</template>

<script setup>

const writing = await queryContent('writing').find()
const projects = await queryContent('projects').find()
</script>