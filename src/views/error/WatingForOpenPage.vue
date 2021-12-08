<template>
  <div class="page-wrapper">
    <div class="text-content">
      <p class="font__semi-title">
        너무 빨리 오셨군요!<br />
        감동이에요 😭
      </p>
      <p class="font__content-text mt-2 mb-3">
        이렇게 먼저 찾아와 주셔서 정말 감사해요! 아쉽게도 아직은 인터넷 편지
        작성 기간이 아니지만 조금만 기다리시면 인터넷 편지를 보내실 수 있어요.
        캘린더에 일정을 추가해보세요!
      </p>
    </div>

    <div
      style="
        margin: 0 21px;
        border-radius: 8px;
        width: 327px;
        height: 137px;
        background-color: black;
      "
    ></div>

    <div class="action-buttons">
      <BaseButton class="button-dark mb-3" @click="handleClickGoHome"
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
