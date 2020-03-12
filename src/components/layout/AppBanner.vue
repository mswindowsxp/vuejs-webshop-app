<template>
  <div class="hello">
    <section id="home-section" class="hero">
      <VueSlickCarousel v-bind="settings">
        <div :style="{'background-image': 'url(' + require('@/assets/images/bg_1.jpg') + ')'}" class="slider-item" data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="800">
          <div class="overlay"></div>
          <div class="container">
            <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

              <div class="col-md-12 text-center">
                <h1 class="mb-2">Welcome to TY FOODS</h1>
                <h2 class="subheading mb-4">We deliver all plastic products</h2>
                <p><a href="#" class="btn btn-primary">View Details</a></p>
              </div>

            </div>
          </div>
        </div>
        <div :style="{'background-image': 'url(' + require('@/assets/images/bg_2.jpg') + ')'}" class="slider-item" data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="800">
          <div class="overlay"></div>
          <div class="container">
            <div class="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
              <div class="col-sm-12 text-center">
                <h1 class="mb-2">World of plastics</h1>
                <h2 class="subheading mb-4">We deliver all plastic products</h2>
                <p><a href="#" class="btn btn-primary">View Details</a></p>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'app-dashboard',
  data () {
    return {
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        fade: true
      }
    }
  },
  props: {
    msg: String
  },
  components: {
    VueSlickCarousel
  }
}
</script>
<style>
  .slider-item {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 500px;
    position: relative;
    z-index: 0;
  }

  @media (max-width: 1024.98px) {
    .slider-item {
      background-position: center center !important;
      height: 400px;
    }
  }
  @media (max-width: 768px) {
    .slider-item {
      background-position: center center !important;
      height: 350px;
    }
  }

.slider-item .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000;
    opacity: .2;
  }

.slider-item .slider-text {
    height: 500px;
    z-index: 0;
  }

  @media (max-width: 800.98px) {
 .slider-item .slider-text {
      text-align: center;
    }
  }

.slider-item .slider-text .subheading {
    color: #000000;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 4px;
    text-transform: uppercase;
    display: inline-block;
    color: #fff;
  }

.slider-item .slider-text h1 {
    font-size: 8vw;
    color: #fff;
    line-height: 1.3;
    font-weight: 400;
    font-family: "Amatic SC", cursive;
  }

  @media (max-width: 600.98px) {
     .slider-item .slider-text h1 {
      font-size: 40px;
    }
  }

  .slider-item .slider-text p {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
  }

  @media (max-width: 991.98px) {
   .slider-item .slider-text p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 23px;
    }
  }
</style>
