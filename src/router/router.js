import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
  },
  {
    path: '/product-list/:name',
    name: 'Product',
    component: () => import(/* webpackChunkName: "Product-List" */'../views/Product'),
    props: false
  },
  {
    path: '/product/:id',
    name: 'single-product',
    component: () => import(/* webpackChunkName: "Product-List" */'../components/layout/SingleProduct'),
    props: true
  },
  {
    path: '/cart',
    name: 'shop-cart',
    component: () => import(/* webpackChunkName: "shop-cart */ '../components/layout/ShopCart')
  },
  {
    path: '**',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */'../components/common/AppError')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) { // make stay at the top of the page
    return { x: 0, y: 0 }
  }
})

export default router
