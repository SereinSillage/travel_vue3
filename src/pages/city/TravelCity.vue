<template>
  <div>
    <CityHeader />
    <CitySearch :cities="data.cities" />
    <CityList 
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="letter"
    />
    <CityAlphabet
      :list="data.cities"
      @change="handleLetterChange"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/CityHeader.vue';
import CitySearch from './components/CitySearch.vue';
import CityList from './components/CityList.vue';
import CityAlphabet from './components/CityAlphabet.vue';
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import {ref} from 'vue'

export default {
  name: 'TravelCity',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup(){
    const {letter,handleLetterChange}=useLetterLogic();
    const data =reactive({
      cities: {},
      hotCities: [],
      // letter: '',
    })
   async function getData(){
    let res =await axios.get('http://localhost:8080/city.json')
        const cityRes = res.data;
        if (cityRes.ret && cityRes.data) {
          data .cities = cityRes.data.cities;
          data .hotCities = cityRes.data.hotCities;
        }
   }
   onMounted(()=>getData())
    return {data ,handleLetterChange,letter}
  },
  //vue2
  
  // data() {
  //   return {
  //     cities: {},
  //     hotCities: [],
  //     letter: '',
  //   };
  // },
  //    mounted() {
  //   this.getData();
  // },
  // methods: {
  //   getData() {
  //     axios.get('http://localhost:8080/city.json').then((res) => {
  //       const cityRes = res.data;
  //       if (cityRes.ret && cityRes.data) {
  //         this.cities = cityRes.data.cities;
  //         this.hotCities = cityRes.data.hotCities;
  //       }
  //       // console.log(this.cities)
  //     });
  //   },
  //   handleLetterChange(letter) {
  //     this.letter = letter;
  //     console.log(letter)

  //   },
  // },
};
function useLetterLogic() {
   const letter=ref('')
   function handleLetterChange(selected) {
      letter.value = selected;
      console.log(letter.value)
   }
   return {handleLetterChange,letter}
  }
</script>

<style></style>
