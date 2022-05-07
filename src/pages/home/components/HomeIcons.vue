<template>
  <div class="icons">
    <swiper
      class="homeswiper"
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          v-for="item of page"
          :key="item.id"
          class="icon"
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
              alt=""
            >
          </div>
          <p class="icon-desc">
            {{ item.desc }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed } from "vue"

export default {
name:'HomeIcons',
props:{
  iconList:Array,
},
component:{
 Swiper,
SwiperSlide,
},
setup(props){
const pages=computed(()=>{
  const pages = [];
     props. iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
})
return {pages}
}

  // computed: {
  //   pages() {
  //     const pages = [];
  //     this.iconList.forEach((item, index) => {
  //       const page = Math.floor(index / 8);
  //       if (!pages[page]) {
  //         pages[page] = [];
  //       }
  //       pages[page].push(item);
  //     });
  //     return pages;
  //   },
  // },
}
</script>

<style scoped lang='scss'>

.icons {
  margin-top: 0.2rem;
  .icon {
    position: relative;

    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    // background: rgb(219, 139, 139); 
        .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;
        /* background-color: #fff; */
        .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
        }
        }
        .icon-desc {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        color: #333;
        text-align: center;
        // background-color: rgba(111, 17, 17, 0.499);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        }
    }
}


</style>