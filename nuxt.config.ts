// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['@/assets/css/main.css'],
  image: {
    dir: 'assets/images'
  },
  fonts: {
    families: [
      { name: 'Satoshi', provider: 'fontshare' },
      { name: 'Sentinel', provider: 'fontshare' },
      { name: 'Work Sans', provider: 'fontshare' },
      { name: 'JetBrains Mono', provider: 'fontshare' },
    ]
  }
}
)