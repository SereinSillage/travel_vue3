<template>
  <transition>
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation',
};
</script>

<style scoped lang="scss">
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}
</style>
