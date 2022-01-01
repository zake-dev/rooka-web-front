<template>
  <div class="page-wrapper">
    <div class="text-content">
      <p class="font__semi-title">
        너무 빨리 오셨군요!<br />
        감동이에요 <Emoji>😭</Emoji>
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
      <BaseButton class="button-gray" @click="handleGoHome"
        >홈으로 가기</BaseButton
      >
      <BaseButton class="button-dark" @click="handleAddCalendar"
        >캘린더에 추가하기</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import Emoji from '@/components/Decorator/Emoji'
import BaseButton from '@/components/Button/BaseButton'

export default {
  components: {
    Emoji,
    BaseButton,
  },
  setup() {
    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleGoHome = () => router.push('/')
    const handleAddCalendar = () =>
      window.open(
        'https://www.google.com/calendar/render?action=TEMPLATE&text=test&details=this+is+description&location=rooka.kr%2F%EA%B0%80%EB%82%98%EB%8B%A4.1610&dates=20220127T030300Z%2F20220130T030300Z',
      )

    return {
      /* Functions */
      handleGoHome,
      handleAddCalendar,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
  min-height: 100vh;
  width: 100vw;
}
.text-content {
  padding: 92px 32px 16px 32px;
}
.background {
  height: 100%;
}
.action-buttons {
  padding: 72px 64px 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
