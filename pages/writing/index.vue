<template>
  <div>
    <h1>Writing</h1>
    <ul class="text-lg sm:text-xl space-y-4" v-if="articles.length">
      <li
        class="underline hover:text-cyan-500 transition duration-300 ease-in-out"
        v-for="article in articles"
        :key="article.slug"
      >
        <NuxtLink :to="`/writing/${article.slug}`">{{
          article.title
        }}</NuxtLink>
      </li>
    </ul>
    <div class="text-center" v-else>
      <h3>🚧</h3>
      <h3>
        articles are under construction! <br />
        Check back soon for some cool things I've done.
      </h3>
    </div>
  </div>
</template>

<script setup>
// Fetch all articles in the `articles` folder
const articles = await queryContent('writing').find()
</script>
