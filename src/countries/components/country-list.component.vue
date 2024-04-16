<script>
import CountryCard from "./country-card.component.vue";

export default {
  name:"country-list",
  components: {CountryCard},
  props:{
    countries:{
      type: Array,
      required:true
    }
  }
}
</script>

<template>
<div v-for="country in countries">
  <country-card :country="country"/>
</div>
</template>

<style scoped>

</style>