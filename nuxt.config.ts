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
  fonts: {
    families: [
      { name: 'Satoshi', provider: 'fontshare' }, // sans
      { name: 'Sentinel', provider: 'fontshare' }, // serif
      { name: 'Work Sans', provider: 'fontshare' }, // display
      { name: 'JetBrains Mono', provider: 'fontshare' }, // mono
    ],
  },
  content: {
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
        content: 'In a scene 10m wide among the many Powers of Ten',
      },
      { name: 'keywords', content: 'nuxt, vue, javascript, awesome' },
      { name: 'author', content: 'Shivaramakrishna Srinivasan' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:title', content: 'Shivaramakrishna' },
      {
        name: 'og:description',
        content: 'In a scene 10m wide among the many Powers of Ten',
      },
      // { name: 'og:image', content: '/path/to/og-image.png' },
      { name: 'og:url', content: 'https://shivaramakrishna99.github.io' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Shivaramakrishna' },
      {
        name: 'twitter:description',
        content: 'In a scene 10m wide among the many Powers of Ten',
      },
      // { name: 'twitter:image', content: '/path/to/twitter-image.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
})
