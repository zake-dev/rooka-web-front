<template>
  <div class="page-wrapper">
    <MainLandingView />
    <MainIntroductionView />
  </div>
</template>

<script>
import MainLandingView from '@/components/Main/MainLandingView.vue'
import MainIntroductionView from '@/components/Main/MainIntroductionView.vue'

export default {
  components: {
    MainLandingView,
    MainIntroductionView,
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
