<template>
   <modal name="demo-login" transition="pop-out" :width="modalWidth" :height="400">
<!--      <app-sign-up></app-sign-up>-->
      <app-sign-in></app-sign-in>
   </modal>
</template>
<script>
// import AppSignUp from '../user/AppSignUp'
import AppSignIn from '../user/AppSignIn'
const MODAL_WIDTH = 356
export default {
  name: 'login-modal',
  data () {
    return {
      modalWidth: MODAL_WIDTH
    }
  },
  components: {
    // AppSignUp,
    AppSignIn
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH
      ? MODAL_WIDTH / 2
      : MODAL_WIDTH
  }
}
</script>
