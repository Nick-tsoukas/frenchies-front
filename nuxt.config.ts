// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr:false,
  target:'static',
  modules: [
    '@nuxt/content'
  ],
  vite: {
    server: {
          fs: {
            allow: ['../../../../../../../../../../../'],
          },
        },
      },
   
  devtools: { enabled: true }
})
