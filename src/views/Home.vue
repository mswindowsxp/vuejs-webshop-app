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
    AppPanel: () => import('@/components/layout/AppPanel'),
    FavoriteList: () => import('@/components/layout/FavoriteList'),
    TopSale: () => import('@/components/layout/TopSale'),
    IntroduceOwner: () => import('@/components/layout/IntroduceOwner')
  }
}
</script>
