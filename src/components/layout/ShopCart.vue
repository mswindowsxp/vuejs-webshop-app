<template>
   <div>
      <div class="hero-wrap hero-bread"
           :style="{'background-image': 'url(' + require('@/assets/images/bg_1.jpg') + ')'}">
         <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
               <div class="col-md-9 text-center">
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
                  <h1 class="mb-0 bread">My Cart</h1>
               </div>
            </div>
         </div>
      </div>
      <section class="ftco-section ftco-cart">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="cart-list">
                     <div v-if="!shopCart || shopCart.length === 0">
                        <h1> is empty</h1>
                     </div>
                     <div v-else>
                        <table class="table">
                           <thead class="thead-primary">
                           <tr class="text-center">
                              <th>Product name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                              <th>Image</th>
                              <th>Action</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr class="text-center" v-for="(item, index) in shopCart" :key="index">
                              <td class="product-name">
                                 <h3>{{ item.productName }}</h3>
                                 <p>have no description</p>
                              </td>

                              <td class="price">${{ item.priceSale }}</td>

                              <td class="quantity">
                                 <div class="input-group mb-3">
                                    <input type="text" name="quantity" class="quantity form-control input-number"
                                           value="1"
                                           min="1" max="100">
                                 </div>
                              </td>

                              <td class="total">$4.90</td>
                              <td class="image-prod">
                                 <div class="img" :style="{'background-image': 'url(' + (`${item.src}${index}`) + ')'}"></div>
                              </td>
                              <td class="product-remove"><button @click="removeItemInCart(item.id)"><span class="ion-ios-close"></span></button></td>
                           </tr><!-- END TR-->

                           </tbody>
                        </table>
                        <div class="col-lg-4 mt-5 cart-wrap">
                           <div class="cart-total mb-3">
                              <h3>Cart Totals</h3>
                              <p class="d-flex">
                                 <span>Subtotal</span>
                                 <span>$20.60</span>
                              </p>
                              <p class="d-flex">
                                 <span>Delivery</span>
                                 <span>$0.00</span>
                              </p>
                              <p class="d-flex">
                                 <span>Discount</span>
                                 <span>$3.00</span>
                              </p>
                              <hr>
                              <p class="d-flex total-price">
                                 <span>Total</span>
                                 <span>$17.60</span>
                              </p>
                           </div>
                           <p><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
import store from '../../store/store'
export default {
  name: 'shop-cart',
  computed: {
    shopCart () {
      return store.getters.GET_SHOP_CART
    }
  },
  methods: {
    removeItemInCart (id) {
      store.dispatch('REMOVE_ITEM_CART', id)
    },
    changeHeader: () => {
      // store.dispatch('ON_OFF_HEADER_VER2', true)
    }
  },
  created () {
    this.changeHeader()
  },
  mounted () {
  }
}
</script>
