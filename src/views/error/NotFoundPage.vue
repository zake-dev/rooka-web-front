<template>
  <div class="page-wrapper">
    <div class="text-content">
      <p class="font__semi-title">
        여긴 어디...?<br />
        나는 누구...? 👁️👄👁️
      </p>
      <p class="font__content-text mt-2 mb-3">
        편지함을 찾을 수 없어요...! 혹시 다른 행성의 주소일까요?<br />
        주소가 맞게 입력됐는지 다시 한 번 확인해주세요!
      </p>
    </div>

    <img class="background" :src="BackgroundPng" />

    <div class="action-buttons">
      <BaseButton class="button-primary mb-3" @click="handleClickGoHome"
        >홈으로 가기</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import BackgroundPng from '@/assets/images/404-background.png'
import BaseButton from '@/components/Button/BaseButton'

export default {
  components: {
    BaseButton,
  },
  setup() {
    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleClickGoHome = () => router.push('/')

    return {
      /* Assets */
      BackgroundPng,
      /* Functions */
      handleClickGoHome,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

main {
  height: 100% !important;
  overflow: hidden;
}
.text-content {
  margin-top: 116px;
  padding: 48px 32px;
}
.background {
  height: 100%;
}
.action-buttons {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 94px;
  padding: 16px;
  display: inline-flex;
  justify-content: center;
}
</style>
