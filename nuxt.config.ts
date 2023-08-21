// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
