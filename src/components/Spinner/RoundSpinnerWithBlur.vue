<template>
  <div class="blur-area">
    <div class="loader"></div>
  </div>
</template>

<script>
import { onBeforeMount, onUnmounted } from 'vue'

export default {
  setup() {
    onBeforeMount(
      () => (document.querySelector('body').style.overflowY = 'hidden'),
    )
    onUnmounted(() => (document.querySelector('body').style.overflowY = ''))
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables';

.blur-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - #{$appBarHeight});
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 56px;
  height: 56px;
  border: 8px solid $gray3;
  border-top-color: $rookaYellow;
  border-radius: 50%;
  animation: loader-rotate 1s linear infinite;
  z-index: 1000;
}
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
