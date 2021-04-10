export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'phiindia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      { type: 'text/javascript', src: '/js/jquery.js' },
      { type: 'text/javascript', src: '/js/bootstrap.min.js' },
      { type: 'text/javascript', src: '/js/isotope.js' },
      { type: 'text/javascript', src: '/js/html5lightbox.js' },
      { type: 'text/javascript', src: '/js/slick.min.js' },
      { type: 'text/javascript', src: '/js/tweenMax.js' },
      { type: 'text/javascript', src: '/js/wow.min.js' },
      { type: 'text/javascript', src: '/js/scripts.js' }
    ]
  },

  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {}
}
