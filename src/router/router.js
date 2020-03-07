import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product'
import SingleProduct from '../components/layout/SingleProduct'
import AppError from '../components/common/AppError'

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
  },
  {
    path: '/product/:id',
    name: 'single-product',
    component: SingleProduct,
    props: true
  },
  {
    path: '*',
    name: '404',
    component: AppError
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
