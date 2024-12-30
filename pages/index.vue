<template>
  <div>
    <ContentDoc path="/" />
  </div>
</template>

<script setup>
const writing = await queryContent('writing').find()
const projects = await queryContent('projects').find()
</script>
