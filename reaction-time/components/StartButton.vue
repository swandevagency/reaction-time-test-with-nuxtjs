<template>
  <div>
    <button @click="startGame">Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showClickMe: false
    }
  },
  methods: {
    startGame() {
      this.showClickMe = true
      this.$emit('click',this.showClickMe)
    }
  }
}
</script>

<style>

</style>