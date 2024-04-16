<script>
import {Country} from "./countries/model/country.entity.js";

export default{
  name: 'App',
  data(){
    return{
      countries: [],
      errors: [],
      countryApi: new countriesApiService()
    }
  },
  create(){

  },
  methods:{
    buildCountryListFromResponseData(country){
      return Countries.map(country=>{
        new Country(country.name,
            country.cca2,
            country.capital,
            country.region)
      });
    }
  }
}
</script>

<template>

</template>