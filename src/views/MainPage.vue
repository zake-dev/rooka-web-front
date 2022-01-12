<template>
  <div class="page-wrapper">
    <MainLandingView />
    <MainIntroductionView />
    <MainTemplateView />
  </div>
</template>

<script>
import MainLandingView from '@/components/Main/MainLandingView.vue'
import MainIntroductionView from '@/components/Main/MainIntroductionView.vue'
import MainTemplateView from '@/components/Main/MainTemplateView.vue'

export default {
  components: {
    MainLandingView,
    MainIntroductionView,
    MainTemplateView,
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
