<template>
   <div id="app goto-here">
      <app-header v-if="!activeHeaderVer2"></app-header>
      <app-header-ver2 v-if="activeHeaderVer2"></app-header-ver2>
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
import AppHeaderVer2 from './components/common/AppHeaderVer2'

export default {
  name: 'mainApp',
  components: {
    AppHeaderVer2,
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
    activeHeaderVer2 () {
      return this.$store.getters.GET_HEADER_STATUS
    }
  },

  mounted () {
    this.$store.dispatch('FETCH_PRODUCT_LIST')
  }
}
</script>
