<template>
   <div>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
         <div class="container-fluid">
            <router-link tag="a" to="/" class="navbar-brand">TY FOODS</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item active"><router-link class="nav-link" tag="a" to="/">{{ $t("home") }}</router-link> </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">{{ $t('product') }}</a>
                     <div class="dropdown-menu" aria-labelledby="dropdown04">
                        <router-link tag="a" to="/product-list/tissue" class="dropdown-item">{{ $t('sub-product.tissue') }}
                        </router-link>
                        <router-link tag="a" to="/product-list/paper-cup" class="dropdown-item">{{ $t('sub-product.paper-cup') }}
                        </router-link>
                        <router-link tag="a" to="/product-list/bottle-plastic" class="dropdown-item">{{ $t('sub-product.bottle-plastic') }}
                        </router-link>
                        <router-link tag="a" to="/product-list/flour" class="dropdown-item">{{ $t('sub-product.flour')}}
                        </router-link>
                     </div>
                  </li>
                  <li class="nav-item"><a href="about.html" class="nav-link">{{$t('partner')}}</a></li>
                  <li class="nav-item"><a href="blog.html" class="nav-link">{{$t('news')}}</a></li>
                  <li class="nav-item"><a href="contact.html" class="nav-link">{{$t('contact')}}</a></li>
                  <li class="nav-item">
                     <a href="javascript:void(0)" class="nav-link" @click="loginOrSignUp">  {{$t("login")}}</a>
                  </li>
                  <li class="nav-item">
                     <router-link tag="a" class="nav-link icon-shopping_cart" to="/cart">[{{shopCartSize}}]</router-link>
                  </li>
                  <li class="nav-item dropdown-header">
                     <select v-model="langSelected">
                        <option v-for="lang in optionLangs" :key="lang.value" :value="lang.value">{{ lang.text }}
                        </option>
                     </select>
                  </li>
               </ul>
            </div>
            <div class="search-top">
               <form action="#" class="subscribe-form">
                  <div class="form-group d-flex">
                     <input type="text" class="form-control">
                     <input type="submit" value="" class="submit submit-search px-3"><span
                     class="icon-search"></span>
                  </div>
               </form>
            </div>
         </div>
      </nav>
      <modal-sign-in-up></modal-sign-in-up>
   </div>

</template>
<script>
import store from '../../store/store'
import ModalSignInUp from './ModalSignInUp'

export default {
  name: 'app-header',
  data () {
    return {
      shopCart: this.$store.getters.GET_SHOP_CART_SIZE,
      optionLangs: [
        {
          text: 'Vietnamese',
          value: 'vi'
        },
        {
          text: 'English',
          value: 'en'
        }
      ],
      langSelected: 'vi'
    }
  },
  components: {
    ModalSignInUp
  },
  computed: {
    shopCartSize () {
      return this.$store.getters.GET_SHOP_CART_SIZE
    }
  },
  watch: {
    langSelected: (val) => {
      store.dispatch('UPDATE_LANG', val)
    }
  },
  methods: {
    loginOrSignUp: function login () {
      this.$modal.show('demo-login')
    }
  }
}
</script>

<style lang="scss">
   #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }

   #nav {
      padding: 30px;

      a {
         font-weight: bold;
         color: #2c3e50;

         &.router-link-exact-active {
            color: #42b983;
         }
      }
   }

   select {
      background-color: #0e0101;
      color: white;
      padding: 12px;
      width: 130px;
      border: none;
      font-size: 20px;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
      -webkit-appearance: button;
      outline: none;
   }
</style>
