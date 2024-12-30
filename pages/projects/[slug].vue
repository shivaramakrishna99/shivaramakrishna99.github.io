<template>
  <div>
    <ContentDoc :document="project" />
  </div>
</template>

<script setup>
// Get the slug from the route
const route = useRoute()
const slug = route.params.slug

// Fetch the content document
const project = await queryContent('projects').where({ slug }).findOne()

if (!project) {
  // Handle 404 if article is not found
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}
</script>
