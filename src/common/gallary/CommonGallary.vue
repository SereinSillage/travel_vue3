<template>
  <div>
    <div
      class="container"
      @click="handleGallaryClick"
    >
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide
            v-for="(item, index) of imgs"
            :key="index"
          >
            <img
              class="gallary-img"
              :src="item"
              alt=""
            >
          </swiper-slide>

          <!-- <div
            slot="pagination"
            class="swiper-pagination"
          /> -->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true,
      },
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  .wrapper {
    // background-color: #fff;
    // overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallary-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
