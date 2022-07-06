<template>
  <div>
    <span>{{ resultObject.userName }} : {{ resultObject.sec }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    clickedInSec: Array,
    resultObject: Object,
    showResult: Boolean,
  },
}
</script>

<style scoped></style>
