<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper :swiper-list="data.swiperList" />
    <HomeIcons :icon-list="data.iconList" />
    <HomeRecommend :recommend-list="data.recommendList" />
    <HomeWeekend :weekend-list="data.weekendList" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import { reactive, onMounted, } from "vue"
import HomeHeader from '@/pages/home/components/HomeHeader.vue'
import HomeIcons from '@/pages/home/components/HomeIcons.vue'
import HomeSwiper from '@/pages/home/components/HomeSwiper.vue'
import HomeRecommend from '@/pages/home/components/HomeRecommend.vue'
import HomeWeekend from '@/pages/home/components/HomeWeekend.vue'

// import { mapState } from 'vuex';
import { useStore } from 'vuex';

export default {
  name: 'TravelHome',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup(){
    const data =reactive({
      // lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:{},
      weekendList:[]
    })
    const store=useStore()
    const city=store.state.city
   
    async function getData() {
      let res=await axios
        .get("http://localhost:8080/index.json?city= + city")
          const homeRes = res.data;
          if (homeRes.ret && homeRes.data) {
            //   // console.log(this)为什么不会打印？
            data.swiperList = homeRes.data.swiperList;
            data.iconList = homeRes.data.iconList;
            data.recommendList = homeRes.data.recommendList;
            data.weekendList = homeRes.data.weekendList;
          }
    }
    onMounted(()=>{
      // data.lastCity=city
      getData()
    })
    //  onActivated(()=>{
    // if (data.lastCity !==city.value){
    //   data.lastCity=city
    // getData()
    // }})
    return {data,city}
  }

  //Vue2

  // data() {
  //   return {
  //     swiperList:[],
  //     iconList:[],
  //     recommendList:{},
  //     HomeWeekend:[]
  //      }},
//   computed:{
// ...mapState(['city'])
//        },
//    mounted() {
//     this.lastCity = this.city;
//     this.getData();
//   },
//   activated(){
// if (this.lastCity !==this.city){
//     this.getData();

// }
//   },
//   methods: {
//     getData() {
//       axios
//         .get("http://localhost:8080/index.json?city= + this.city")
//         .then((res) => {
//           const homeRes = res.data;
//           if (homeRes.ret && homeRes.data) {
//             //   // console.log(this)为什么不会打印？
//             this.swiperList = homeRes.data.swiperList;
//             this.iconList = homeRes.data.iconList;
//             this.recommendList = homeRes.data.recommendList;
//             this.weekendList = homeRes.data.weekendList;
//           }
         
//           // console.log(homeRes.data.swiperList);
//           // console.log(homeRes.data.iconList);
//           // console.log(homeRes.data.recommendList);
//           // console.log(homeRes.data.weekendList);
//         });
  
//     }
//   }
  

};
</script>
