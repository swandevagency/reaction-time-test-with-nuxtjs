<template>
  <div class="main-page-wrapper">
    <MainContent />
    <Test>psalkdfsdaf kljsadlf ajsdfl jasklfdaflkj</Test>
    {{products}}
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'
export default {
  components: {
    MainContent,
    Test: () => import('@/components/test.vue')
  },

  // vuex usage
  async asyncData({store}) {
    await store.dispatch('product/getProducts')
  },
  computed:  {
    products () {
      return this.$store.state.product.products
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
}
</style>
