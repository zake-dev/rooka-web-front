<template>
  <div class="page-wrapper">
    <MainLandingView />
    <MainIntroductionView />
    <MainTemplateView />
    <MainMailBoxView />
    <MainRedirectView />
    <MainCopyrightView />
  </div>
</template>

<script>
import MainLandingView from '@/components/Main/MainLandingView.vue'
import MainIntroductionView from '@/components/Main/MainIntroductionView.vue'
import MainTemplateView from '@/components/Main/MainTemplateView.vue'
import MainMailBoxView from '@/components/Main/MainMailBoxView.vue'
import MainRedirectView from '@/components/Main/MainRedirectView.vue'
import MainCopyrightView from '@/components/Main/MainCopyrightView.vue'

export default {
  components: {
    MainLandingView,
    MainIntroductionView,
    MainTemplateView,
    MainMailBoxView,
    MainRedirectView,
    MainCopyrightView,
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
