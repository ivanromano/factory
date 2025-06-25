// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/supabase',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-auth-utils',
  ],

  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions : {
      login: '/login',
      callback: '/confirm',
      exclude : [
        '/**',
     ]  
  }
  },
  srcDir: 'src',
  css: ['~/css/prism.css'],
  runtimeConfig: {
    // API: '',
    public: {
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
      API:  process.env.NUXT_PUBLIC_API_BASE, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      // API: 'http://localhost:8000/', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      // API: 'https://victishipsis.onrender.com/', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
    // grecaptcha: {
    //   hideBadge: true,
    //   mode: "base",
    //   siteKey: "",
    //   version: 3,
    // },
  },

  imports: {
    dirs: ["store", "composables", "constants"],
  },


})