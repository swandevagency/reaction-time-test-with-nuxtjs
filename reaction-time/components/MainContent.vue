<template>
  <div class="main-content-component-wrapper" id="mainContent">
    <!-- @user-arr="userArr" -->
    <ClickMeBox :show-click-me="showClickMe" @click="clickMeClicked" :user-name="userName" @set-history="setHistory"/>
    <NameInput
      @submit="submitNameInput"
    />
    <StartButton v-if="showStart" @click="startGame" />
  </div>
</template>

<script>
import ClickMeBox from '../components/ClickMeBox.vue'
import NameInput from '../components/NameInput.vue'
import StartButton from '../components/StartButton.vue'
export default {
  data() {
    return {
      showClickMe: false,
      showStart: false,
      showResult: false,
      userName: ''
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
    },
    clickMeClicked(value) {
      this.showClickMe = false
      this.showResult = true
      this.showStart = false
    },
    submitNameInput(value) {
      this.userName = value
      this.showStart = true
    },
    setHistory(value) {
      this.showResult = value
    }
  },
}
</script>

<style scoped>
#mainContent {
  width: 76%;
  margin: 150px auto 100px auto;
}
</style>
