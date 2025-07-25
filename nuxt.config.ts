// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/',
    // buildAssetsDir: '/'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/css/main.css'],
  // image: {
  //   dir: '@/assets/images'
  // },
  // fonts: {
  //   families: [
  //     { name: 'IBM Plex Sans', provider: 'google' }, // sans
  //     { name: 'IBM Plex Serif', provider: 'google' }, // serif
  //     { name: 'IBM Plex Mono', provider: 'google' }, // mono
  //     { name: 'Manrope', provider: 'google' }, // display
  //   ],
  // },
  content: {
    markdown: {
      toc: {
        depth: 3, // Generate TOC up to h3 headings
        searchDepth: 3, // Search for headings up to h3
      },
    },
    highlight: {
      theme: 'github-light', // Optional: Choose a code highlighting theme
    },
  },
  head: {
    title: 'Shivaramakrishna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Lounging in a 10m frame within the many Powers of Ten',
      },
      { name: 'keywords', content: 'nuxt, vue, javascript, awesome' },
      { name: 'author', content: 'srks' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:title', content: 'Shivaramakrishna' },
      {
        name: 'og:description',
        content: 'Lounging in a 10m frame within the many Powers of Ten',
      },
      // { name: 'og:image', content: '/path/to/og-image.png' },
      { name: 'og:url', content: 'https://shivaramakrishna99.github.io' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Shivaramakrishna' },
      {
        name: 'twitter:description',
        content: 'Lounging in a 10m frame within the many Powers of Ten',
      },
      // { name: 'twitter:image', content: '/path/to/twitter-image.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
})
