<template>
   <div>
      <div class="hero-wrap hero-bread" :style="{'background-image': 'url(' + require('@/assets/images/bg_1.jpg')+')'}">
         <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
               <div class="col-md-9 text-center" data-aos="fade-up" data-aos-duration="1500">
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Contact us</span></p>
                  <h1 class="mb-0 bread">Contact us</h1>
               </div>
            </div>
         </div>
      </div>
      <section class="ftco-section contact-section bg-light">
         <div class="container">
            <div class="row d-flex mb-5 contact-info">
               <div class="w-100"></div>
               <div class="col-md-3 d-flex">
                  <div class="info bg-white p-4">
                     <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
               </div>
               <div class="col-md-3 d-flex">
                  <div class="info bg-white p-4">
                     <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                  </div>
               </div>
               <div class="col-md-3 d-flex">
                  <div class="info bg-white p-4">
                     <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                  </div>
               </div>
               <div class="col-md-3 d-flex">
                  <div class="info bg-white p-4">
                     <p><span>Website</span> <a href="#">yoursite.com</a></p>
                  </div>
               </div>
            </div>
            <div class="row block-9">
               <div class="col-md-6 order-md-last d-flex">
                  <form action="#" class="bg-white p-5 contact-form">
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name">
                     </div>
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Email">
                     </div>
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject">
                     </div>
                     <div class="form-group">
                        <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                     </div>
                     <div class="form-group">
                        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
                     </div>
                  </form>

               </div>

               <div class="col-md-6 d-flex">
                  <div id="map" class="bg-white">
                     <iframe src="https://maps.google.com/maps?q=thanh%20nien%20magazine&t=&z=13&ie=UTF8&iwloc=&output=embed"  class="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" allowfullscreen=""></iframe>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
export default {
  name: 'contact'
}
</script>
<style scoped>
   iframe {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
   }
</style>
