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
      isLoad: true
    }
  },
  mounted () {
    console.log('render ')
  }
}
</script>
