<template>
  <div class="page-wrapper">
    <TheMainAppBarRegisterButton
      class="appbar-button"
      :is-visible="isTopButtonVisible"
      :style="{ opacity: isTopButtonVisible ? 1 : 0 }"
    />

    <MainLandingView />
    <MainIntroductionView />
    <MainTemplateView />
    <MainMailBoxView />
    <MainRedirectView />
    <MainCopyrightView />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

import TheMainAppBarRegisterButton from '@/components/TheMainAppBar/TheMainAppBarRegisterButton.vue'
import MainLandingView from '@/components/Main/MainLandingView.vue'
import MainIntroductionView from '@/components/Main/MainIntroductionView.vue'
import MainTemplateView from '@/components/Main/MainTemplateView.vue'
import MainMailBoxView from '@/components/Main/MainMailBoxView.vue'
import MainRedirectView from '@/components/Main/MainRedirectView.vue'
import MainCopyrightView from '@/components/Main/MainCopyrightView.vue'

export default {
  components: {
    TheMainAppBarRegisterButton,
    MainLandingView,
    MainIntroductionView,
    MainTemplateView,
    MainMailBoxView,
    MainRedirectView,
    MainCopyrightView,
  },
  setup() {
    /* Local State */
    const isTopButtonVisible = ref(false)

    /* Event Handler */
    const handleScroll = () => {
      const APP_BAR_HEIGHT = 56
      const $noTopButtonArea = document.querySelector('#no-top-button')
      const { y, height } = $noTopButtonArea.getBoundingClientRect()

      isTopButtonVisible.value = APP_BAR_HEIGHT + Math.abs(y) > height
    }

    onMounted(() => document.body.addEventListener('scroll', handleScroll))
    onBeforeRouteLeave(() =>
      document.body.removeEventListener('scroll', handleScroll),
    )

    return {
      isTopButtonVisible,
    }
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

.appbar-button {
  position: fixed;
  right: 20px;
  top: 16px;
  z-index: 1001;
  transition: opacity 0.3s ease;
}
</style>
