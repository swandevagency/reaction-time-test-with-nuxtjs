<template>
  <div id="box">
    <ClickMeButton :client-width="clientWidth" :client-height="clientHeight"/>
  </div>
</template>

<script>
import ClickMeButton from '../components/ClickMeButton.vue'
export default {
  data() {
    return {
      clientWidth: 0,
      clientHeight: 0
    }
  },
  mounted () {
    const box = document.getElementById('box');
    this.clientWidth = box.clientWidth
    this.clientHeight = box.clientHeight
    console.log(this.clientWidth)
    console.log(this.clientHeight)
  },
  components: {
    ClickMeButton,
  },
}
</script>

<style scoped>
div {
  height: 28rem;
  border: 1px solid rgb(236, 236, 236);
  box-shadow: 0 0 16px rgba(109, 109, 109, 0.2);
  border-radius: 12px;
}
</style>
