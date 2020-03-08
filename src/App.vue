<template>
   <div id="app goto-here">
      <app-header></app-header>
      <router-view/>
      <br>
      <app-footer></app-footer>
      <div id="click-to-top">
         <div class="mouse1">
            <a href="#" class="mouse-icon">
               <div class="mouse-wheel"><span class="icon-chat"></span></div>
            </a>
         </div>
         <div class="mouse">
            <button @click="scrollToTop" class="mouse-icon">
               <div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
            </button>
         </div>
      </div>
   </div>
</template>
<script>
import AppHeader from './components/common/AppHeader'
import AppFooter from './components/common/AppFooter'

export default {
  name: 'mainApp',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      productList: []
    }
  },
  methods: {
    scrollToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  computed: {
    productLists () {
      return this.$store.getters.GET_PRODUCT_LIST
    }
  },
  mounted () {
    this.$store.dispatch('FETCH_PRODUCT_LIST')
  }
}
</script>
