<script>
export default {
  name: "unavailable-content",
  props:{
    errors: null,
  }
}
</script>

<template>
<div>
  <div><h4>Unavailable content</h4></div>
  <div v-for="error in errors">
    <h6>{{error}}</h6>
  </div>
</div>
</template>

<style scoped>

</style>