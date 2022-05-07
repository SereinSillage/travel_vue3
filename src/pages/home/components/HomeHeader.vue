<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">
        &#xe600;
      </div>
    </div>
    <div class="header-input">
      <span class="iconfont sersch-icon">&#xe651;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }} 
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// import { computed } from '@vue/runtime-core';
// import {mapState} from 'vuex'
import { useStore } from 'vuex';


export default {
  name: 'HomeHeader',
  setup(){
   const store=useStore()
   const city=store.state.city

  return {city}
  }
//vue2写法
  // computed:{
  //   ...mapState(['city'])
  // }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;
  font-size: 0.4rem;
}

.header-left {
  width: 0.5rem;
  float: left;
}

.back-icon {
  text-align: center;
  font-size: 0.3rem;
  width: 0.6rem;
}

.header-input {
  flex: 1;

  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-left: 0.1rem;
  padding-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}

.sersch-icon {
  display: inline-block;
  margin-right: 10px;
}

.header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  color: #fff;
}

.arrow-icon {
  display: inline-block;
  margin-left: 5px;
}
</style>
