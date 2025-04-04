<template>
  <div class="slider-area fix p-relative">
    <div class="slider-active" style="background: #333333;">
      <div v-for="(slide, index) in slides" :key="index" class="single-slider slider-bg d-flex align-items-center" :style="{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }">
        <div class="slider-line" data-animation="fadeInRight" data-delay=".8s">
          <img src="/assets/img/bg/slider-line.png" alt="slider-line">
        </div>
        <div class="slider-line2" data-animation="fadeInRight" data-delay=".4s">
          <img src="/assets/img/bg/slider-line2.png" alt="slider-line">
        </div>
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 col-md-7 text-center">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s" v-html="slide.title"></h2>
                <p data-animation="fadeInUp" data-delay=".6s">{{ slide.description }}</p>
                <div class="slider-btn mt-30">
                  <NuxtLink to="/contact" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More</NuxtLink>
                  <NuxtLink to="/projects" class="btn ss-btn active" data-animation="fadeInRight" data-delay=".4s">See Project</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const slides = [
  {
    image: '/assets/img/slider/banner-1.jpg',
    title: 'Speeding Up Business <span>Innovation</span>',
    description: 'Enhancing the Value of Your Workforce'
  },
  {
    image: '/assets/img/slider/banner-2.jpg',
    title: 'Developing Transformative <span>Learning Pathways</span>',
    description: 'That enable your team to create innovative, forward-thinking solutions.'
  },
  {
    image: '/assets/img/slider/banner-3.jpg',
    title: 'Delivering a Customer-Centered <span>Experience</span>',
    description: 'Supporting healthcare leaders in fulfilling their goals'
  }
];

let sliderInstance = null;

onMounted(() => {
  // Load required scripts
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  // Initialize slider after scripts are loaded
  Promise.all([
    loadScript('/assets/js/jquery.min.js'),
    loadScript('/assets/js/slick.min.js')
  ]).then(() => {
    // Initialize slider
    const $ = window.jQuery;
    const slider = $('.slider-active');
    
    slider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false
          }
        }
      ]
    });

    // Handle animations
    slider.on('init', function(e, slick) {
      const $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });

    slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      const $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });

    sliderInstance = slider;

    // Animation function
    function doAnimations(elements) {
      const animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        const $this = $(this);
        const $animationDelay = $this.data('delay');
        const $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  });
});

onBeforeUnmount(() => {
  // Cleanup slider
  if (sliderInstance) {
    sliderInstance.slick('unslick');
    sliderInstance = null;
  }
});
</script>

<style scoped>
/* Import the main styles */
@import '~/assets/css/style.css';
@import '~/assets/css/responsive.css';
</style> 