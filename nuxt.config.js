const bodyParser = require('body-parser');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AG Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Cool Web Dev Blog Post Nuxt Project' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://my-app-b3c16-default-rtdb.asia-southeast1.firebasedatabase.app/',
    fbAPIKey: 'AIzaSyDmN6x5nvUDvP-4uVJqCSobklblLWOib_A'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
