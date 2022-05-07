<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont header-back">
          &#xe600;
        </div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
name:'CityHeader',
}
</script>

<style scoped lang='scss'>
.header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  font-size: 0.4rem;
}
.header-back {
  position: absolute;
  top: 0;
  left: 0.1rem;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>