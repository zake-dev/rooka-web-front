<template>
  <div class="page-wrapper">
    <MainLandingView />
    <MainLandingView />
    <MainLandingView />
    <MainLandingView />
  </div>
</template>

<script>
import MainLandingView from '@/components/Main/MainLandingView.vue'

export default {
  components: {
    MainLandingView,
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables';

.view-wrapper {
  min-height: calc(max(100vh, 100vw) - #{$appBarHeight});
  display: flex;
  flex-direction: column;
}
</style>
