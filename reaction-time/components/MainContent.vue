<template>
  <div>
    <ClickMeBox />
    <NameInput />
    <StartButton />
    <History />
  </div>
</template>

<script>
import ClickMeBox from '../components/ClickMeBox.vue'
import NameInput from '../components/NameInput.vue'
import StartButton from '../components/StartButton.vue'
import History from '../components/History.vue'
export default {
  components: {
    ClickMeBox,
    NameInput,
    StartButton,
    History,
  },
}
</script>

<style scoped>
div {
  width: 76%;
  margin: 150px auto;
}
</style>
