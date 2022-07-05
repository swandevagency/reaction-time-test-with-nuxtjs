<template>
  <div>
    <button id="test">Click Me!</button>
  </div>
</template>

<script>
export default {
  props: {
    clientWidth: Number,
    clientHeight: Number,
    showClickMe: Boolean
  },
  mounted() {
      document.getElementById('test').style.top =
        this.getRandomNumber(0, this.clientHeight - 50) + 'px'
      document.getElementById('test').style.left =
        this.getRandomNumber(0, this.clientWidth - 160) + 'px'
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min
    }
  }
}
</script>

<style scoped>
button {
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
