<template>
  <div id="mainContent">
    <ClickMeBox :show-click-me="showClickMe"/>
    <NameInput />
    <StartButton @click="startGame"/>
  </div>
</template>

<script>
import ClickMeBox from '../components/ClickMeBox.vue'
import NameInput from '../components/NameInput.vue'
import StartButton from '../components/StartButton.vue'
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
  },
  methods: {
    startGame(value) {
      this.showClickMe = value
    }
  }
}
</script>

<style scoped>
#mainContent {
  width: 76%;
  margin: 150px auto 100px auto;
}
</style>
