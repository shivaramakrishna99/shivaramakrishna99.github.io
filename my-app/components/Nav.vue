<template>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/now">Now</NuxtLink></li>
        <li><NuxtLink to="/writing">Writing</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 1rem;
    background: #333;
    color: white;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  </style>