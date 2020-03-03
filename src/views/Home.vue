<template>
  <div class="home">
    <app-panel msg="this id dashboard"/>
    <favorite-list></favorite-list>
     <top-sale></top-sale>
  </div>
</template>

<script>
// @ is an alias to /src
import AppPanel from '../components/layout/AppPanel'
import FavoriteList from '../components/layout/FavoriteList'
import TopSale from '../components/layout/TopSale'

export default {
  name: 'Home',
  components: {
    AppPanel,
    FavoriteList,
    TopSale
  }
}
</script>
