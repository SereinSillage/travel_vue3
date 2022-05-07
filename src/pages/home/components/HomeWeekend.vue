<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li
        v-for="item of weekendList"
        :key="item.id"
        class="item border-bottom"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
            alt=""
          >
        </div>
        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array,
  },

};
</script>

<style scoped>
.title {
  /* margin-top: 0.2rem; */
  background-color: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
}
.item-img {
  /* background-color: #fff; */
  /* height: 100%; */
  width: 100%;
  /* padding: 0.1rem; */
}
.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
