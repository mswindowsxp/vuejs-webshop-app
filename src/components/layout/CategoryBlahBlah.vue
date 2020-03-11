<template>
   <section class="ftco-section ftco-category ftco-no-pt">
      <div class="container">
         <div class="row">
            <div class="col-md-8">
               <div class="row">
                  <div class="col-md-6 order-md-last align-items-stretch d-flex">
                     <div class="category-wrap-2 img align-self-stretch d-flex"
                          :style="{'background-image': 'url(' + require('@/assets/images/category.jpg') + ')'}"
                          data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <div class="text text-center">
                           <h2>Water bottle</h2>
                           <p class="title_category">Protect the health of every home</p>
                           <p><a href="#" class="btn btn-primary">Shop now</a></p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="category-wrap img mb-4 d-flex align-items-end"
                          :style="{'background-image': 'url(' + require('@/assets/images/category-1.jpg') + ')'}"
                          data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <div class="text px-3 py-1">
                           <h2 class="mb-0"><a href="#">Plastic Glass</a></h2>
                        </div>
                     </div>
                     <div class="category-wrap  img d-flex align-items-end"
                          :style="{'background-image': 'url(' + require('@/assets/images/category-2.jpg') + ')'}"
                          data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <div class="text px-3 py-1">
                           <h2 class="mb-0"><a href="#">Plastic cup with lid</a></h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-md-4">
               <div class="category-wrap  img mb-4 d-flex align-items-end"
                    :style="{'background-image': 'url(' + require('@/assets/images/category-3.jpg') + ')'}"
                    data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                  <div class="text px-3 py-1">
                     <h2 class="mb-0"><a href="#">Spoon</a></h2>
                  </div>
               </div>
               <div class="category-wrap img d-flex align-items-end"
                    :style="{'background-image': 'url(' + require('@/assets/images/category-4.jpg') + ')'}"
                    data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                  <div class="text px-3 py-1">
                     <h2 class="mb-0"><a href="#">Bowl</a></h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
export default {
  name: 'category-blah-blah'
}
</script>
