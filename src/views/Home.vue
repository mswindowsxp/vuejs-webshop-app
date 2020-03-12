<template>
   <div class="home">
      <app-baner/>
        <br>
        <introduce-owner/>
        <favorite-list/>
        <top-sale/>
      <categoryblah/>
   </div>
</template>

<script>
import store from '../store/store'
export default {
  name: 'Home',
  components: {
    AppBaner: () => import(/* webpackChunkName: "panel" */'@/components/layout/AppBanner'),
    FavoriteList: () => import(/* webpackChunkName: "favorite" */'@/components/layout/FavoriteList'),
    TopSale: () => import(/* webpackChunkName: "top-sale" */'@/components/layout/TopSale'),
    IntroduceOwner: () => import(/* webpackChunkName: "owner" */'@/components/layout/IntroduceOwner'),
    Categoryblah: () => import(/* webpackChinkName: "category" */ '@/components/layout/CategoryBlahBlah')
  },
  data () {
    return {
      idRemove: 0
    }
  },
  methods: {
    removeItem: (id) => {
      console.log(id)
      store.dispatch('REMOVE_ITEM_CART', id)
      console.log(store.getters.GET_SHOP_CART)
    }
  }
}
</script>
