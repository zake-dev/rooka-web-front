<template>
  <div class="page-wrapper">
    <div class="text-content">
      <p class="font__semi-title">
        너무 빨리 오셨군요!<br />
        감동이에요 <Emoji>😭</Emoji>
      </p>
      <p class="font__content-text mt-3">
        이렇게 먼저 찾아와 주셔서 정말 감사해요! 아쉽게도 아직은 인터넷 편지
        작성 기간이 아니지만 조금만 기다리시면 인터넷 편지를 보내실 수 있어요.
        캘린더에 일정을 추가해 보세요!
      </p>
    </div>

    <div class="message-box">
      <span class="message-box__title">인터넷 편지 시작 예상일</span>
      <span class="message-box__date">{{ expectedMailBoxOpeningDate }}</span>
      <span class="message-box__caption">{{ remainingDays }} 남음</span>
    </div>

    <div class="action-buttons">
      <BaseButton class="button-gray" @click="handleAddCalendar">
        구글캘린더에 추가하기
      </BaseButton>
      <BaseButton class="button-dark" @click="handleOpenModal">
        링크 공유하기
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { toKoreanDateTimeString, toTimeString } from '@/utils/TextFormatter'
import { getDiffInDayHourMinSec } from '@/utils/DateUtil'
import { openModal } from '@/utils/DialogHandler'
import { getCalendarUrl } from '@/utils/GoogleCalendar'

import Emoji from '@/components/Decorator/Emoji'
import BaseButton from '@/components/Button/BaseButton'

/* Vuex */
const store = useStore()
const state = store.state.toEarlyBirds
const key = computed(() => state.key)
const soldier = computed(() => state.soldier)
const expectedMailBoxOpeningDateTime = computed(
  () => state.expectedMailBoxOpeningDateTime,
)
const expectedMailBoxOpeningDate = computed(() =>
  toKoreanDateTimeString(expectedMailBoxOpeningDateTime.value),
)
const remainingDays = computed(() =>
  toTimeString(getDiffInDayHourMinSec(new Date(), expectedMailBoxOpeningDateTime.value)),
)

/* Event Handler */
const handleOpenModal = () => openModal('ShareToSns')
const handleAddCalendar = () => {
  const { name } = soldier.value
  const title = `${name} 훈련병 인편 오픈일`
  const link = `rooka.kr/${key.value}`
  const description = `${name} 훈련병에게 인편 보내기 시작하는 날 ${link}`
  const startDatetime = new Date(expectedMailBoxOpeningDateTime.value)
  const endDatetime = new Date(startDatetime.getTime() + 1000 * 60 * 60)
  window.open(
    getCalendarUrl({
      title,
      description,
      location: link,
      startDatetime,
      endDatetime,
    }),
  )
}
</script>

<style scoped lang="scss">
@import '@/scss/global';
@import '@/scss/_variables';

.page-wrapper {
  min-height: 100vh;
  width: 100vw;
  transform: translateY(-#{$appBarHeight});
}
.text-content {
  padding: 92px 32px 0;
}
.message-box {
  margin: 40px 16px 64px;
  padding: 32px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $gray6;
  box-shadow: 0px 6px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 7px;

  &__title {
    @extend .font__content-text;
    color: $white;
  }
  &__date {
    @extend .font__semi-title;
    color: $white;
  }
  &__caption {
    @extend .font__caption;
    color: $white;
    margin-top: 4px;
  }
}
.action-buttons {
  padding: 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
