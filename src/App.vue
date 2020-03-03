<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <br>
    <app-footer></app-footer>
    <div id="click-to-top">
      <div class="mouse">
        <a href="#" class="mouse-icon">
          <div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
        </a>
      </div>
      <div class="mouse">
        <a href="#" class="mouse-icon">
          <div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/common/AppHeader'
import AppFooter from './components/common/AppFooter'
export default {
  name: 'mainApp',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
