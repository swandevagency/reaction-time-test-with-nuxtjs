<template>
  <div id="box">
    <ClickMeButton
      v-if="showClickMe"
      :client-width="clientWidth"
      :client-height="clientHeight"
      @click="clickMeClickedSec"
    />
    <div id="history">
      <ul v-for="result in userArr" :key="result.id">
        <History :result-object="result" />
      </ul>
    </div>
  </div>
</template>

<script>
import ClickMeButton from '../components/ClickMeButton.vue'
import History from './History.vue'
export default {
  data() {
    return {
      clientWidth: 0,
      clientHeight: 0,
      id: 0,
      userArr: [],
      setHistory: false,
    }
  },
  mounted() {
    if (localStorage.results) {
      const storedResult = JSON.parse(localStorage.getItem('results'))
      for (let i = 0; i < storedResult.length; i++) {
        this.userArr.push(storedResult[i])
      }
      if (storedResult[storedResult.length - 1].id !== 0) {
        this.id = storedResult[storedResult.length - 1].id
      }
    }
    const box = document.getElementById('box')
    this.clientWidth = box.clientWidth
    this.clientHeight = box.clientHeight
  },
  components: {
    ClickMeButton,
    History,
  },
  props: {
    showClickMe: Boolean,
    userName: String,
  },
  methods: {
    clickMeClickedSec(value) {
      this.userArr.push({ id: this.id++, userName: this.userName, sec: value })
      this.storeResult()
      this.$emit('setHistory', this.setHistory)
      this.$emit('click', this.userArr)
    },
    storeResult() {
      localStorage.setItem('results', JSON.stringify(this.userArr))
    },
  },
}
</script>

<style scoped>
#box {
  height: 28rem;
  border: 1px solid rgb(236, 236, 236);
  box-shadow: 0 0 16px rgba(109, 109, 109, 0.2);
  border-radius: 12px;
}

#history {
  position: relative;
  top: 630px;
}
</style>
