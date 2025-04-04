// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      title: 'Metasquareinc - Investment & Business Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Metasquareinc - Connecting businesses with investment opportunities' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: '/js/vendor/jquery-3.6.0.min.js' , defer:false},
        { src: '/js/vendor/modernizr-3.5.0.min.js' , defer:true},
       // { src: '/js/slick.min.js' , defer:true},
        { src: '/js/ajax-form.js' , defer:true},
        { src: '/js/paroller.js' , defer:true},
        { src: '/js/wow.min.js' , defer:true},
        { src: '/assets/js/popper.min.js' , defer:true},
        { src: '/assets/js/bootstrap.min.js' , defer:true},
        { src: '/js/js_isotope.pkgd.min.js' , defer:true},
        { src: '/js/imagesloaded.min.js' , defer:true},
        { src: '/js/parallax.min.js' , defer:true},
        { src: '/js/jquery.waypoints.min.js' , defer:true},
        { src: '/js/jquery.counterup.min.js' , defer:true},
        { src: '/js/jquery.scrollUp.min.js' , defer:true},
        { src: '/js/jquery.meanmenu.min.js' , defer:true},
        { src: '/js/parallax-scroll.js' , defer:true},
        { src: '/js/jquery.magnific-popup.min.js' , defer:true},
        { src: '/js/element-in-view.js' , defer:true},
        { src: '/js/main.js' , defer:true},
 

      ]
    }
  },



  css: [
    '@/assets/css/main.css', 
  ],

  modules: ['vue3-carousel-nuxt'], 
  carousel: {
    prefix: 'MyPrefix'
  },
   
   
  // Build Configuration
  build: {
    transpile: ['swiper', 'aos']
  },

  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],

  

  compatibilityDate: '2025-03-15',

  nitro: {
    typescript: {
      strict: true
    }
  },

  experimental: {
    typedPages: true
  },
  vite: {
    build: {
      sourcemap: false // Disable source maps
    }
  }
})