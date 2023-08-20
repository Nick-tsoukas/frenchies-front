// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  vite: {
    server: {
          fs: {
            allow: ['../../../../../../../../../../../'],
          },
        },
      },
  devtools: { enabled: true }
})
