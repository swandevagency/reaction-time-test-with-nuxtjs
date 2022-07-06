<template>
  <div>
    <button id="clickMe" @click="clickMeClicked">Click Me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showClickMeDelay: 0,
      clickInSec: 0,
      stopCounting: true,
    }
  },
  mounted() {
    let clickMe = document.getElementById('clickMe')
    this.showClickMeDelay = Math.floor(Math.random() * 10000)
    clickMe.style.top = this.getRandomNumber(0, this.clientHeight - 50) + 'px'
    clickMe.style.left = this.getRandomNumber(0, this.clientWidth - 160) + 'px'
    setTimeout(() => {
      clickMe.style.visibility = 'visible'
    }, this.showClickMeDelay)
    setInterval(() => {
      if (this.stopCounting) {
        this.clickInSec += 0.1
      } else return
    }, 100)
  },
  props: {
    clientWidth: Number,
    clientHeight: Number,
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min
    },
    clickMeClicked() {
      this.stopCounting = false
      this.clickInSec -= this.showClickMeDelay / 1000
      this.$emit('click', this.clickInSec)
      this.clickInSec = 0
      this.showClickMeDelay = 0
    },
  },
}
</script>

<style scoped>
button {
  visibility: hidden;
  position: relative;
  color: white;
  padding: 13px 26px;
  background-color: rgb(97, 95, 95);
  border: 1px solid rgb(97, 95, 95);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
}
</style>
