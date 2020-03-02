<template>
  <div class="home">
    <app-panel msg="this id dashboard"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppPanel from '../components/layout/AppPanel'

export default {
  name: 'Home',
  components: {
    AppPanel
  }
}
</script>
