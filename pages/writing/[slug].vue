<template>
  <div>
    <h1>{{ article.title }}</h1>
    <h1>{{ article.description }}</h1>
    <ContentDoc :document="article" />
  </div>
</template>

<script setup>


// Get the slug from the route
const route = useRoute();
const slug = route.params.slug;

// Fetch the content document
const article = await queryContent('writing').where({ slug }).findOne();

if (!article) {
  // Handle 404 if article is not found
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  });
}
</script>