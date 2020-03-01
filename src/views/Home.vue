<template>
  <div class="home">
    <AppDashboard msg="this id dashboard"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppDashboard from '@/components/AppDashboard.vue'

export default {
  name: 'Home',
  components: {
    AppDashboard
  }
}
</script>
