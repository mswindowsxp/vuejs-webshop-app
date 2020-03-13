<template>
   <section class="ftco-section testimony-section">
      <div class="container" data-aos="fade-up"
           data-aos-easing="linear"
           data-aos-duration="1000">

         <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-4 heading-section text-center logo-intro" >
               <img :src="logoPng" alt="">
            </div>
            <div class="col-md-8 heading-section  text-center">
               <span class="subheading">Giới Thiệu</span>
               <h2 class="mb-4">Công ty cung ứng đồ nhựa</h2>
               <p>Công ty TNHH Thực phẩm NANA hiện đang sản xuất các sản phẩm thương hiệu NANA như: Siro, Bột làm bánh
                  Flan
                  và Rau câu ăn liền, Bột kem tươi, Nước tinh khiết, Nước tăng lực E-200. Nhà máy được trang bị các máy
                  móc
                  thiết bị hiện đại cùng với công nghệ sản xuất thực phẩm và nước giải khát tiên tiến của Mỹ, Nhật & Đài
                  Loan.
                  Với tiêu chuẩn về chất lượng và vệ sinh quốc tế, chúng tôi cung cấp nhiều loại thực phẩm và nước giải
                  khát
                  khác nhau, đáp ứng nhu cầu của thị trường Việt Nam & xuất khẩu. Ngành nghề kinh doanh Thực Phẩm - Cung
                  Cấp
                  Thực Phẩm, Công Ty Thực Phẩm Nước Giải Khát - Sản Xuất và Phân Phối</p>
            </div>
         </div>
         <div class="row ">
            <div class="col-md-12">
               <div class="carousel-testimony owl-carousel">
                  <vue-slick-carousel v-bind="setting">
                     <div class="item">
                        <div class="testimony-wrap p-4 pb-5">
                           <div class="user-img mb-5"
                                :style="{'background-image': 'url(' + require('@/assets/images/person_1.jpg') + ')'}">
                           </div>
                           <div class="text text-center">
                              <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries
                                 Vokalia and
                                 Consonantia, there live the blind texts.</p>
                              <p class="name">SGS NHỰA PS(EU)</p>
                              <span class="position">Marketing Manager</span>
                           </div>
                        </div>
                     </div>
                     <div class="item">
                        <div class="testimony-wrap p-4 pb-5">
                           <div class="user-img mb-5"
                                :style="{'background-image': 'url(' + require('@/assets/images/person_2.jpg') + ')'}">
                           </div>
                           <div class="text text-center">
                              <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries
                                 Vokalia and
                                 Consonantia, there live the blind texts.</p>
                              <p class="name">BỘ CÔNG BỐ HỘP HỘP NHỰA PP</p>
                              <span class="position">Interface Designer</span>
                           </div>
                        </div>
                     </div>
                     <div class="item">
                        <div class="testimony-wrap p-4 pb-5">
                           <div class="user-img mb-5"
                                :style="{'background-image': 'url(' + require('@/assets/images/person_3.jpg') + ')'}">
                           </div>
                           <div class="text text-center">
                              <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries
                                 Vokalia and
                                 Consonantia, there live the blind texts.</p>
                              <p class="name">BỘ CÔNG BỐ HỘP HỘP</p>
                              <span class="position">UI Designer</span>
                           </div>
                        </div>
                     </div>
                     <div class="item">
                        <div class="testimony-wrap p-4 pb-5">
                           <div class="user-img mb-5"
                                :style="{'background-image': 'url(' + require('@/assets/images/person_3.jpg') + ')'}">
                           </div>
                           <div class="text text-center">
                              <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries
                                 Vokalia and
                                 Consonantia, there live the blind texts.</p>
                              <p class="name">SGS NHỰA PS(EU)</p>
                              <span class="position">UI Designer</span>
                           </div>
                        </div>

                     </div>
                  </vue-slick-carousel>
               </div>
            </div>
         </div>

      </div>
   </section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'company-info',
  components: {
    'vue-slick-carousel': VueSlickCarousel
  },
  data () {
    return {
      setting: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: 'ease',
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
      },
      logoPng: require('@/assets/images/logo.png')
    }
  }
}
</script>
