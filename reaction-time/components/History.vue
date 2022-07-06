<template>
  <div>
    <span>{{ resultObject.userName }} : {{ resultObject.sec }}</span>
  </div>
</template>

<script>
export default {
  props: {
    resultObject: Object,
  },
}
</script>

<style scoped></style>
