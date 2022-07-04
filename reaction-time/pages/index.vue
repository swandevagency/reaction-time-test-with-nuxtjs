<template>
  <div>
    <MainContent />
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'
export default {
  components: {
    MainContent,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
}
</style>
