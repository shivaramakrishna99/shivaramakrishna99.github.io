<script setup>
import { queryContent } from '#imports'

const { data } = await queryContent('/news').findOne()
console.log("Data here",data)
const newsItems = data?.news || []
</script>

<template>
  <div class="max-w-2xl mx-auto py-12">
    <h1 class="text-3xl font-bold mb-8">News & Updates</h1>
    <ul class="space-y-8">
      <li v-for="item in newsItems" :key="item.date" class="relative pl-6 border-l-2 border-blue-200">
        <span class="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></span>
        <div class="text-sm text-gray-500 mb-1">{{ item.date }}</div>
        <div class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</div>
        <div class="text-base text-gray-700 dark:text-gray-300">{{ item.description }}</div>
      </li>
    </ul>
  </div>
</template>