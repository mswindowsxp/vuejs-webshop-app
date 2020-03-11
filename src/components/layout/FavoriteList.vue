<template>
   <div id="favorite-list">
      <section class="ftco-section">
         <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section text-center" data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500">
               <h2 class="mb-4">{{$t("favorites")}}</h2>
            </div>
         </div>
         <div class="container">
            <vue-slick-carousel v-bind="settings">
               <div v-for="(item, index) in productList" v-bind:key="index">
                  <div class="row product_slider slider">
                     <div>
                        <div class="product">
                           <router-link tag="a" class="img-prod" :to="{name: 'single-product', params: {id: index}}">
                              <img class="img-fluid" :src="`${item.src}${index}`" alt="Colorlib Template">
                              <div class="status-pro-top">
                                 <div class="ins-discount-percentage">{{item.salePercent}}%</div>
                              </div>
                              <div class="overlay"></div>
                           </router-link>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="#">{{item.productName}}</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span class="mr-2 price-dc">${{item.priceRoot}}</span><span
                                       class="price-sale">${{item.priceSale}}</span>
                                    </p>
                                 </div>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript:void(0)" @click="addToCart(item)"
                                       class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript:void(0)"
                                       class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript:void(0)"
                                       class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </vue-slick-carousel>
         </div>
      </section>
   </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import store from '../../store/store'

export default {
  name: 'favorite-list',
  components: {
    VueSlickCarousel
  },
  methods: {
    addToCart (item) {
      store.dispatch('ACC_ADD_SHOP_CART', item)
    }
  },
  data () {
    return {
      productList: [
        {
          productName: 'P1',
          priceSale: '1000',
          priceRoot: '2000',
          src: 'https://picsum.photos/300/300?random=',
          salePercent: '10'
        },
        {
          productName: 'P2',
          priceSale: '1000',
          priceRoot: '2000',
          src: 'https://picsum.photos/300/300?random=',
          salePercent: '15'
        },
        {
          productName: 'P3',
          priceSale: '1000',
          priceRoot: '2000',
          src: 'https://picsum.photos/300/300?random=',
          salePercent: '20'
        },
        {
          productName: 'P4',
          priceSale: '1000',
          priceRoot: '2000',
          src: 'https://picsum.photos/300/300?random=',
          salePercent: '25'
        },
        {
          productName: 'P5',
          priceSale: '1000',
          priceRoot: '2000',
          src: 'https://picsum.photos/300/300?random=',
          salePercent: '30'
        }
      ],
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        lazyLoad: 'ondemand',
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
   .img-prod img {
      max-width: 250px;
   }
</style>
