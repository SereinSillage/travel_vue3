<template>
  <div class="wrapper">
    <swiper
    v-if="showSwiper"
      class="homeswiper"
      :modules="modules"
      :pagination="{ clickable: true }"
      loop
    >
      <swiper-slide
        v-for="item of swiperList"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt=""
        >
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { computed } from '@vue/runtime-core';

export default {
  name: "HomeSwiper",
  
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    swiperList: Array,
  },
  setup(props) {
    const showSwiper=computed(()=> props.swiperList.length)
    return {
      modules: [Pagination],
      showSwiper
    };
    
  },

};
</script>

<style lang="scss" scoped>
.homeswiper ::v-deep .swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper-img {
  width: 100%;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.33%;
  background: #eee;
}
</style>
