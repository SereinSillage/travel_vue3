<template>
  <div>
    <div class="search">
      <label for="search-input">
        <input
          v-model="keyword"
          class="search-input"
          type="text"
          placeholder="请输入城市名或拼音"
        >
      </label>
    </div>
    <div
      v-show="keyword"
      ref="search"
      class="search-content"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li
          v-show="hasNoData"
          class="search-item border-bottom"
        >
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';
import { watch,ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },
setup(props){
  const keyword=ref('')
  const list=ref([])
  let timer=null
  const hasNoData=computed(()=>{
      !list.value.length;
  })
  watch(keyword,(keyword,prevKeyword)=>{
if (timer) {
        clearInterval(timer);
        timer=null
      }
      if (!keyword ) {
        list.value = [];
        return;
      }
      // console.log(this.keyword);
      timer = setTimeout(() => {
        const result = [];
        Object.values(props.cities).forEach((value) => {
          value.forEach((arr) => {
            if (arr.spell.indexOf(keyword) !== -1 || arr.name.indexOf(keyword) !== -1) {
              result.push(arr);
            }
          });
        });
       list.value = result;
      }, 100);
  })
  const store=useStore()
  const router=useRouter()
const search=ref(null)
   function handleCityClick(city) {
     store.commit('changeCity',city)
     router.push('/');
      keyword.value = '';
    }
   onMounted(()=>{
    new BetterScroll(search.value, {
      click: true,
    })
   })
  return {
    keyword,
    hasNoData,
    list,
    handleCityClick,
    search
  }
}


  //vue2
  // data() {
  //   return {
  //     keyword: '',
  //     list: [],
  //     timer: null,
  //   };
  // },
  // computed: {
  //   hasNoData() {
  //     return !this.list.length;
  //   },
  // },
  // watch: {
  //   keyword() {
  //     if (this.timer) {
  //       clearInterval(this.timer);
  //     }
  //     if (!this.keyword) {
  //       this.list = [];
  //       return;
  //     }
  //     // console.log(this.keyword);
  //     this.timer = setInterval(() => {
  //       const result = [];
  //       Object.values(this.cities).forEach((value) => {
  //         value.forEach((arr) => {
  //           if (arr.spell.indexOf(this.keyword) !== -1 || arr.name.indexOf(this.keyword) !== -1) {
  //             result.push(arr);
  //           }
  //         });
  //       });
  //       this.list = result;
  //     }, 100);
  //   },
  // },
  // mounted() {
  //   this.scroll = new BetterScroll(this.$refs.search, {
  //     click: true,
  //   });
  // },
  // methods: {
  //   handleCityClick(city) {
  //     this.changeCity(city);
  //   //   this.$store.commit('changeCity', city);
  //     this.$router.push('/');
  //     this.keyword = '';
  //   },
  //   ...mapMutations(['changeCity']),
  // },
};
</script>

<style lang="scss" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;
}
.search-input {
  box-sizing: border-box;
  width: 100%;
  height: 0.62rem;
  padding: 0 0.1rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background-color: #fff;
    color: #666;
  }
}
</style>
