<template>
  <div>
    <button @click="startGame">Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showClickMe: false,
    }
  },
  methods: {
    startGame() {
      this.showClickMe = true
      this.$emit('click', this.showClickMe)
    },
  },
}
</script>

<style scoped>
button {
  position: relative;
  left: 1338px;
  bottom: 100px;
  font-size: 16px;
  color: white;
  background-color: rgb(134, 134, 134);
  border: 1px solid rgb(134, 134, 134);
  padding: 12px 36px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 17px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: rgb(150, 150, 150);
  border: 1px solid rgb(150, 150, 150);
}
</style>
