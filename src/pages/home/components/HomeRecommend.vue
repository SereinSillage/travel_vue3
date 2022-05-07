<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <router-link
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
        class="item border-bottom"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
          alt=""
        >
        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="item-button">
            查看详情
          </button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array,
  },
  
};
</script>

<style scoped>
.title {
  margin-top: 0.2rem;
  background-color: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}
.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  /* background: red; */
}
.item-img {
  /* background-color: #fff; */
  height: 1.7rem;
  width: 1.7rem;
  padding: 0.1rem;
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
  color: #333;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-button {
  margin-top: 0.16rem;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  background-color: #ff9300;
  color: #fff;
  line-height: 0.44rem;
}
</style>
