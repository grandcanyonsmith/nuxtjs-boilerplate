export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  
  // SEO & Meta
  app: {
    head: {
      title: 'Xpress A/C Specialists - Professional Automotive A/C Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional automotive A/C services for cars, trucks, and SUVs. Fast, reliable A/C repair, refrigerant recharge, and climate control diagnostics.' },
        { name: 'keywords', content: 'automotive A/C repair, car air conditioning, A/C service, refrigerant recharge, climate control, auto repair' },
        { property: 'og:title', content: 'Xpress A/C Specialists - Professional Automotive A/C Services' },
        { property: 'og:description', content: 'Professional automotive A/C services for cars, trucks, and SUVs. Fast, reliable A/C repair, refrigerant recharge, and climate control diagnostics.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // CSS Framework
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif']
  },

  // Performance
  experimental: {
    payloadExtraction: false
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://xpress-ac-specialists.vercel.app'
    }
  }
})
