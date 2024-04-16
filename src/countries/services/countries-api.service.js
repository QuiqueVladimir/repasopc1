import axios from 'axios';
import {FlagApiServices} from "../../shared/services/flag-api.services.js";

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
});

export class countriesApiService{

    flagApi=new FlagApiServices();

    static async getCountryName(countryName){
        const response = await http.get('region/');
        return response.data[0];
    }
    getCountriesRegion(){
        return http.get('region/');
    }

    static async getCountryCodeByName(countryName) {
        const response = await http.get(`name/${countryName}`);
        const countryData = response.data[0];
        return countryData.cca2;
    }

    getFlagToLogo(cca2){
        return this.flagApi.getFlagToLogo(cca2);
    }

}