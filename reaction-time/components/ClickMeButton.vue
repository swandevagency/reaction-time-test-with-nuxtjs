<template>
  <div>
    <button
      id="clickMe"
      @click="clickMeClicked"
    >
      Click Me!
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showClickMeDelay: 0,
      test: 0,
      test2: true,
    }
  },
  props: {
    clientWidth: Number,
    clientHeight: Number,
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
      if (this.test2) {
        this.test += 0.1
        console.log(this.test)
      } else return
    }, 100)
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min
    },
    clickMeClicked(e) {
      this.test2 = false
      this.test -= this.showClickMeDelay / 1000
      this.$emit('click', this.test)
      this.test = 0
      this.showClickMeDelay = 0
      // e.target.style.visibility = 'hidden'
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
