// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
     base: '/',
     buildAssetsDir: '/'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
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
    ]
  },
  content: {
    highlight: {
      theme: 'github-dark', // Optional: Choose a code highlighting theme
    }
  }
}
)