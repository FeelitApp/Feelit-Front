// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt',
    ],
    css: [
        '~/assets/css/fonts.css'
    ],
    runtimeConfig: {
        public: {
          apiBase: process.env.API_BASE || 'http://162.19.228.51/api'
        }
      },
})