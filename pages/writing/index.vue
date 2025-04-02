<template>
  <div>
    <h3>Writing</h3>
    <ul class="space-y-4 list-none indent-0" v-if="articles.length">
      <li
        class="hover:text-flexoki-light-bl transition duration-300 ease-in-out"
        v-for="article in articles"
        :key="article.slug"
      >
      <span class="font-mono">
      {{
          article.created
          }}
          &#8226;
        </span>
        <span class="underline">
        <NuxtLink :to="`/writing/${article.slug}`">
          {{
          article.title
          }}
        </NuxtLink>
      </span> 
      </li>
    </ul>
    <div class="text-center" v-else>
      <h3>🚧</h3>
      <h3>
        Articles are being written! <br />
        Check back soon for some cool things I've done.
      </h3>
    </div>
  </div>
</template>

<script setup>
// Fetch all articles in the `articles` folder
const articles = await queryContent('writing').find()
</script>
