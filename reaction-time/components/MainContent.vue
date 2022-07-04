<template>
  <div>
    <ClickMeBox />
    <ClickMeButton />
    <NameInput />
    <StartButton />
    <History />
  </div>
</template>

<script>
import ClickMeBox from '../components/ClickMeBox.vue'
import ClickMeButton from '../components/ClickMeButton.vue'
import NameInput from '../components/NameInput.vue'
import StartButton from '../components/StartButton.vue'
import History from '../components/History.vue'
export default {
  components: {
    ClickMeBox,
    ClickMeButton,
    NameInput,
    StartButton,
    History,
  },
}
</script>

<style></style>
