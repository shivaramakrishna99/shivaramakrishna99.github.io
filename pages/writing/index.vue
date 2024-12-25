<template>
    <div>
      <h1>Writing</h1>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/writing/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  
  // Fetch all articles
  const articles = await queryContent('writing').find();
  </script>