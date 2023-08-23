// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr:false,
  nitro: {
    preset: 'service-worker'
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  vite: {
    server: {
          fs: {
            allow: ['../../../../../../../../../../../'],
          },
        },
      },
   
  devtools: { enabled: true }
})
