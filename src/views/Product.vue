<template>
   <div class="product-list">
      <hr>
      <h3>Page Show</h3>
      <h1> {{ msg }} {{ name }}</h1>
      <hr>
   </div>
</template>
<script>
export default {
  name: 'product-list-info',
  watch: {
    '$route.params.name': function (name) {
      this.test(name)
    }
  },
  data () {
    return {
      msg: 'Product List: ',
      name: this.$route.params.name
    }
  },
  methods: {
    test (name) {
      this.name = name
    }
  },
  created () {
  }
}
</script>
