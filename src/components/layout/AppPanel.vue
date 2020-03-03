<template>
  <div class="hello">
    <section id="home-section" class="hero">
      <VueSlickCarousel v-bind="settings">
        <div :style="{'background-image': 'url(' + require('@/assets/images/bg_1.jpg') + ')'}" class="slider">
          <div class="overlay"></div>
          <div class="container">
            <div class="col-md-12 text-center">
              <h1 class="mb-2">Welcome to TY FOODS</h1>
              <h2 class="subheading mb-4">We deliver all plastic products</h2>
              <p><a href="#" class="btn btn-primary">View Details</a></p>
            </div>
          </div>
        </div>
        <div :style="{'background-image': 'url(' + require('@/assets/images/bg_2.jpg') + ')'}" class="slider">
          <div class="overlay"></div>
          <div class="container">

            <div class="col-md-12 text-center">
              <h1 class="mb-2">Welcome to TY FOODS</h1>
              <h2 class="subheading mb-4">We deliver all plastic products</h2>
              <p><a href="#" class="btn btn-primary">View Details</a></p>
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
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        cssEase: 'ease-in'
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
.slider {
  height: 500px
}
</style>
