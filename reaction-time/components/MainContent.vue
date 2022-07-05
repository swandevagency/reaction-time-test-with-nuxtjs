<template>
  <div>
    <ClickMeBox :show-click-me="showClickMe"/>
    <NameInput />
    <StartButton @click="startGame"/>
    <History />
  </div>
</template>

<script>
import ClickMeBox from '../components/ClickMeBox.vue'
import NameInput from '../components/NameInput.vue'
import StartButton from '../components/StartButton.vue'
import History from '../components/History.vue'
export default {
  data() {
    return {
      showClickMe: false
    }
  },
  components: {
    ClickMeBox,
    NameInput,
    StartButton,
    History,
  },
  methods: {
    startGame(value) {
      this.showClickMe = value
      console.log(this.showClickMe)
    }
  }
}
</script>

<style scoped>
div {
  width: 76%;
  margin: 150px auto;
}
</style>
