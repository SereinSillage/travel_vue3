<template>
  <div>
    <router-link
      v-show="showAbs"
      to="/"
      class="header-abs"
    >
      <div class="iconfont detail-backicon">
        &#xe600;
      </div>
    </router-link>
    <div
      v-show="!showAbs"
      class="header-fixed"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">
          &#xe600;
        </div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import {onMounted, onUnmounted, ref} from 'vue'

export default {
  name: 'DetailHeader',
  setup(){
const showAbs=ref(true)
const opacityStyle=reactive({
  opacity: 0,
})
function handleScroll() {
      const p = window.pageYOffset;
      const top = document.documentElement.scrollTop || document.body.scrollTop || p;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        opacityStyle.opacity = { opacity };
        showAbs.value = false;
      } else {
       showAbs.value = true;
      }
    }
    onMounted(()=>{
    window.addEventListener('scroll', handleScroll);
    })
    onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll);
    })
return {
  showAbs,
  opacityStyle,
  handleScroll
}
  }
  // data() {
  //   return {
  //     showAbs: 'ture',
  //     opacityStyle: {
  //       opacity: 0,
  //     },
  //   };
  // },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // unmounted() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  // methods: {
  //   handleScroll() {
  //     const p = window.pageYOffset;
  //     const top = document.documentElement.scrollTop || document.body.scrollTop || p;
  //     if (top > 60) {
  //       let opacity = top / 140;
  //       opacity = opacity > 1 ? 1 : opacity;
  //       this.opacityStyle = { opacity };
  //       this.showAbs = false;
  //     } else {
  //       this.showAbs = true;
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  font-size: 0.4rem;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0.1rem;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  .detail-backicon {
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
