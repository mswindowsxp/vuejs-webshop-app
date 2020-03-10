import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/style.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import VueCookies from 'vue-cookies'
import i18n from './lang/i18n'
import VueJSModal from 'vue-js-modal'

Vue.use(VueCookies)
Vue.use(VueJSModal, {
  dialog: true,
  dynamic: true
})

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

export default app
