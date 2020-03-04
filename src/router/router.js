import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-list/:name',
    name: 'Product',
    component: Product,
    props: false
  }
]

const router = new VueRouter({
  routes
})

export default router
