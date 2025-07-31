<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h2 class="font-mono not-italic py-8 sm:py-12">{{ doc.title }}</h2>
          <h5>{{ doc.description }}</h5>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
// Get the slug from the route
const route = useRoute()
const slug = route.params.slug
const path = route.fullPath
console.log("FULL PATH", path)

// Fetch the content document
const doc = await queryContent('projects').where({ slug }).findOne()

if (!doc) {
  // Handle 404 if article is not found
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  })
}
</script>
