<template>
   <div class="home">
      <hr>
      <app-panel/>
        <br>
        <introduce-owner/>
        <favorite-list/>
        <top-sale/>
   </div>
</template>

<script>
import store from '../store/store'
export default {
  name: 'Home',
  components: {
    AppPanel: () => import(/* webpackChunkName: "panel" */'@/components/layout/AppPanel'),
    FavoriteList: () => import(/* webpackChunkName: "favorite" */'@/components/layout/FavoriteList'),
    TopSale: () => import(/* webpackChunkName: "top-sale" */'@/components/layout/TopSale'),
    IntroduceOwner: () => import(/* webpackChunkName: "owner" */'@/components/layout/IntroduceOwner')
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
