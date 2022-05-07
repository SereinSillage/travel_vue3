<template>
  <div
    ref="wrapper"
    class="list"
  >
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{ currentCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div
            v-for="item of hot"
            :key="item.id"
            class="button-wrapper"
            @click="handleCityClick(item.name)"
          >
            <div class="button">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(item, key) of cities"
        :ref="elem => elems[key]=elem"
        :key="key"
        class="area"
      >
        <div class="title border-topbottom">
          {{ key }}
        </div>
        <div
          v-for="cityItem of item"
          :key="cityItem.id"
          class="item-list"
        >
          <div
            class="item border-topbottom"
            @click="handleCityClick(cityItem.name)"
          >
            {{ cityItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
// import {mapState ,mapMutations} from 'vuex'
import {useRouter} from 'vue-router'
import {onMounted, watch,ref } from 'vue'
import { useStore } from 'vuex';


export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  setup(props){
    const store=useStore()
    const router=useRouter()
    const currentCity=store.state.city
    const elems=ref({})
    let  scroll=null
    const wrapper=ref(null)
    function handleCityClick(city){
    store.commit('changeCity', city);
    router.push('/');
    }
    watch(()=>props.letter,(letter,prevLetter)=>{
      if (letter && scroll) {
        const element = elems.value[letter];
        scroll.scrollToElement(element);
      }
  })
  onMounted(()=>{
    scroll = new BetterScroll(wrapper.value, {
      click: true,
  })
      // console.log(scroll)

  })
    return {currentCity,handleCityClick,elems,wrapper}
  }


//   computed:{
//      ... mapState({currentCity:'city'})
//   },
// methods:{
//     handleCityClick(city){
//     //   this.$store.commit('changeCity', city);
//       this.changeCity(city)
//       this.$router.push('/');
//     },
//     ...mapMutations(['changeCity'])
// }
//    watch: {
//     letter() {
//       if (this.letter) {
//         const element = this.$refs[this.letter][0];
//         this.scroll.scrollToElement(element);
//         // console.log(element)
//       }
//     },
//   },
//   mounted() {
//     this.scroll = new BetterScroll(this.$refs.wrapper, {
//       click: true,
//     });
// },
// 
}
</script>
<style lang='scss' scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    padding-left: 0.2rem;
    background: #eee;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33%;
    }
    .button {
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
  .item-list {
    .item {
      line-height: 0.54rem;
      padding-left: 0.2rem;
    }
  }
}
</style>

