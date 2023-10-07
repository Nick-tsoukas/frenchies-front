// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // modules: [
  //   '@nuxt/content'
  // ],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'vue3-carousel-nuxt'],
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
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
