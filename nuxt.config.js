module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'travel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:400,600,700,800|Poppins:400,600&display=swap' }
    ],
    bodyAttrs: {
      class: 'body-fix'
    }
  },

  modules: ['@nuxtjs/style-resources', 'nuxt-leaflet', 'nuxt-imagemin'],
  styleResources: {
      scss: [
        '~assets/css/*.scss',
      ]
  },
  css: [
    '@/assets/css/body-fix.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    { src: 'slick-carousel/slick/slick.css', lang: 'css' }
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    { src: "~plugins/slick-slide.js", ssr: false },
    "~plugins/modal.js"
  ],
  server: {
    host: '0.0.0.0' // default: localhost
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

