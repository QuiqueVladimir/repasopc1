<script>
import {Country} from "../model/country.entity.js";

export default {
  name: "country-car",
  props:{
    country:{
      type: Country,
      required: true
    }
  }
}
</script>

<template>
<pv-card class="m-2">
  <template #header>
    <img :alt="country.name" :src="country.cca2"/>
  </template>
  <template #title>
    <p>{{country.name}}</p>
  </template>
  <template #content>
    <p class="flex align-content-start flex-wrap">
      <span  class="flex align-items-center justify-content-center mr-2">
              <pv-avatar :aria-label="country.capital" :image="country.cca2"
                         shape="circle"/>
      </span>
      <span class="flex align-items-center justify-content-center">
      {{country.name}}
    </span>
    </p>
    <p class="flex align-content-start flex-wrap mt-4">
      {{country.region}}
    </p>
  </template>
  <template #footer>
    <a href="youbube.com" target="_blank">ReadMore</a>
  </template>
</pv-card>


</template>

<style scoped>

</style>