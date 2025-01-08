<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1 class="font-serif font-italic py-4">{{ doc.title }}</h1>
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
const doc = await queryContent('writing','test').where({ slug }).findOne()

if (!doc) {
  // Handle 404 if article is not found
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  })
}
</script>
