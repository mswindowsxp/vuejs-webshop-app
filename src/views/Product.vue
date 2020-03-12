<template>
   <div>
      <div class="hero-wrap hero-bread" :style="{'background-image': 'url(' + require('@/assets/images/bg_1.jpg') + ')'}">
         <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
               <div class="col-md-9 text-center">
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
                  <h1 class="mb-0 bread">Products</h1>
               </div>
            </div>
         </div>
      </div>
      <section class="ftco-section">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-12 mb-5 text-center filter-search-product">
                  <div class="logo">
                     <img  :src="require('@/assets/images/logo.png')" data-aos="face-in" data-aos-duration="1000">
                  </div>
                  <div class="filter-product-list">
                     <ul class="sort-list">
                        <li><a href="javascript: void(0)">{{$t('new-item')}}</a></li>
                        <li><a href="javascript: void(0)">{{$t('top-sale')}}</a></li>
                        <li><a href="javascript: void(0)">{{$t('low-price')}}</a></li>
                        <li><a href="javascript: void(0)">{{$t('high-price')}}</a></li>
                     </ul>
                  </div>
                  <form action="#" class="search-item-form">
                     <div class="form-group d-flex">
                        <input type="text" class="form-control">
                        <input type="submit" value="" class="submit submit-search px-3"><span
                        class="icon-search"></span>
                     </div>
                  </form>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-3">
                  <div class="sidebar-box  ">
                     <h3 class="heading">Danh Mục</h3>
                     <ul class="categories menu-2-level">
                        <li>
                           <a href="javascript: void(0)">LY GIẤY <span class="ion-ios-arrow-down icon-dropdown"></span></a>
                           <ul class="submenu-2-level">
                              <li>
                                 <a href="javascript: void(0)"><span class="ion-submenu ion-ios-arrow-forward"></span>Ly trắng 4.05Z 220z</a>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <a href="javascript: void(0)">HỘP NHỰA CAO CẤP <span class="ion-ios-arrow-down"></span></a>
                           <ul class="submenu-2-level">
                              <li>
                                 <a href="javascript: void(0)"><span class="ion-submenu ion-ios-arrow-forward"></span>Ly Nhựa</a>
                              </li>
                              <li>
                                 <a href="javascript: void(0)"><span class="ion-submenu ion-ios-arrow-forward"></span>Hộp Take way - bento</a>
                              </li>
                              <li>
                                 <a href="javascript: void(0)"><span class="ion-submenu ion-ios-arrow-forward"></span>Hộp đựng bánh kem</a>
                              </li>
                           </ul>
                        </li>
                        <li><a href="javascript: void(0)">MÁY BẤM HỘP NHỰA </a></li>
                        <li><a href="javascript: void(0)"> NGUYÊN VẬT LIỆU PHA CHẾ</a></li>
                        <li><a href="javascript: void(0)"> THIẾT BỊ VÀ NVL LÀM KEM</a></li>
                        <li><a href="javascript: void(0)"> BỘT LÀM BÁNH</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-9">
                  <div class="row categories-product">
                     <div class="col-md-6 col-lg-3   ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-1.jpg')" alt="">
                              <span class="status">30%</span>
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Bell Pepper</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span class="mr-2 price-dc">$120.00</span><span class="price-sale">$80.00</span>
                                    </p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-2.jpg')" alt="">
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Strawberry</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span>$120.00</span></p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="./product-single.html?pid=p1562789" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-23.jpg')" alt="">
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Green Beans</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span>$120.00</span></p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-25.jpg')" alt="">
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Purple Cabbage</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span>$120.00</span></p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-23.jpg')" alt="">
                              <span class="status">30%</span>
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Tomatoe</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span class="mr-2 price-dc">$120.00</span><span class="price-sale">$80.00</span>
                                    </p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-6.jpg')" alt="">
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Brocolli</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span>$120.00</span></p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-7.jpg')" alt="">
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Carrots</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span>$120.00</span></p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-3  ">
                        <div class="product">
                           <a href="javascript: void(0)" class="img-prod"><img class="img-fluid"  :src="require('@/assets/images/product-8.jpg')" alt="">
                              <div class="overlay"></div>
                           </a>
                           <div class="text py-3 pb-4 px-3 text-center">
                              <h3><a href="javascript: void(0)">Fruit Juice</a></h3>
                              <div class="d-flex">
                                 <div class="pricing">
                                    <p class="price"><span>$120.00</span></p>
                                 </div>
                              </div>
                              <div class="d-flex check-point">
                                 <span>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <i class="icon-star-o"></i>
                                 <span>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                 </span>
                              </span>
                              </div>
                              <div class="bottom-area d-flex px-3">
                                 <div class="m-auto d-flex">
                                    <a href="javascript: void(0)" class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                       <span><i class="ion-ios-menu"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="buy-now d-flex justify-content-center align-items-center mx-1">
                                       <span><i class="ion-ios-cart"></i></span>
                                    </a>
                                    <a href="javascript: void(0)" class="heart d-flex justify-content-center align-items-center ">
                                       <span><i class="ion-ios-heart"></i></span>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row mt-5">
               <div class="col text-center">
                  <div class="block-27">
                     <ul>
                        <li><a href="javascript: void(0)">&lt;</a></li>
                        <li class="active"><span>1</span></li>
                        <li><a href="javascript: void(0)">2</a></li>
                        <li><a href="javascript: void(0)">3</a></li>
                        <li><a href="javascript: void(0)">4</a></li>
                        <li><a href="javascript: void(0)">5</a></li>
                        <li><a href="javascript: void(0)">&gt;</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'product-list-info',
  watch: {
    '$route.params.name': function (name) {
      this.test(name)
    }
  },
  data () {
    return {
      msg: 'Product List: ',
      name: this.$route.params.name
    }
  },
  methods: {
    test (name) {
      this.name = name
    }
  },
  mounted () {
    $('.submenu-2-level>li').hide()
    $('.menu-2-level>li').click(function (e) {
      e.preventDefault()
      e.stopPropagation()
      $(this).find('.submenu-2-level>li').toggle()
    })
  },
  created () {
  }
}
</script>
