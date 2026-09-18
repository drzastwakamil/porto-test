// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      link: [{ rel: 'apple-touch-icon', href: '/icons/icon-192.png' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#1b4b66', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#12181d', media: '(prefers-color-scheme: dark)' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ]
    }
  },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/i18n'],
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Porto Weekend',
      short_name: 'Porto',
      description: 'A weekend trip companion for Porto, Portugal',
      theme_color: '#1b4b66',
      background_color: '#1b4b66',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      scope: '/',
      icons: [
        { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/(thumb|upload|commons)\.wikimedia\.org\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'porto-weekend-images',
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 60 * 60 * 24 * 180
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
    client: {
      installPrompt: true
    }
  }
})
