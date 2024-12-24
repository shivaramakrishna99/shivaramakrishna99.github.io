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
}
)