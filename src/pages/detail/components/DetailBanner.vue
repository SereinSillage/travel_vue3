<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick"
    >
      <img
        class="banner-img"
        :src="bannerImg"
        alt=""
      >
      <div class="banner-info">
        <div class="banner-title">
          {{ sightName }}
        </div>
        <div class="banner-nummber">
          <span class="iconfont banner-icon">&#xe6b2;</span>{{ gallaryImgs.length }}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary
        v-show="showGallary"
        :imgs="gallaryImgs"
        @close="handleGallaryClose"
      />
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/CommonGallary.vue';
import FadeAnimation from '@/common/fade/FadeAnimation.vue';
import {ref} from 'vue'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation,
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  setup(){
    const showGallary=ref(false) 
    function handleBannerClick() {
      showGallary.value = true;
    }
    function handleGallaryClose(){
      showGallary.value  = false;
}
    return {
      showGallary,
      handleBannerClick,
      handleGallaryClose
    }
  }
  // data() {
  //   return {
  //     showGallary: false,
  //   };
  // },
  // methods: {
  //   handleBannerClick() {
  //     this.showGallary = true;
  //   },
  //   handleGallaryClose() {
  //     this.showGallary = false;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  // background-color: rgb(157, 89, 89);
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
      // line-height: 0.5rem;
      // height: 0.5rem;
    }
    .banner-nummber {
      height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.3rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background-color: rgba(0, 0, 0, 0.3);
      font-size: 0.24rem;
      .banner-icon {
        margin-right: 0.1rem;
      }
    }
  }
}
</style>
