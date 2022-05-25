<template>
  <div class="page-wrapper">
    <p class="font__semi-title">
      축하합니다 <Emoji>🎉</Emoji><br />1등으로 오셨군요!
    </p>
    <p class="font__content-text py-3">
      아직 아무도 {{ soldier.name }}님의 인편함 링크를 생성하지 않았어요. 지금
      누구보다 먼저 인편함 링크를 생성해 보세요!
    </p>

    <!-- 입력한 폼 정보 -->
    <div class="submitted-form">
      <div class="submitted-form-row">
        <span class="font__content-title">이름</span>
        <span class="font__content-text">{{ soldier.name }}</span>
      </div>
      <div class="submitted-form__divider"></div>
      <div class="submitted-form-row">
        <span class="font__content-title">생년월일</span>
        <span class="font__content-text">
          {{ toKoreanDateString(soldier.birthDate) }}
        </span>
      </div>
      <div class="submitted-form__divider"></div>
      <div class="submitted-form-row">
        <span class="font__content-title">군종</span>
        <span class="font__content-text">공군</span>
      </div>
      <div class="submitted-form__divider"></div>
      <div class="submitted-form-row">
        <span class="font__content-title">입대일</span>
        <span class="font__content-text">
          {{ toKoreanDateString(soldier.enterDate) }}
        </span>
      </div>
      <div class="submitted-form__divider"></div>
      <template v-if="soldier.militaryType === 'ARMY'">
        <div class="submitted-form-row">
          <span class="font__content-title">부대</span>
          <span class="font__content-text">
            {{ soldier.trainingCenterName }}
          </span>
        </div>
        <div class="submitted-form__divider"></div>
      </template>

      <template v-if="soldier.militaryType === 'AF'">
        <div class="submitted-form-row">
          <span class="font__content-title">기수</span>
          <span class="font__content-text"> {{ soldier.kisu }}기 </span>
        </div>
        <div class="submitted-form__divider"></div>
      </template>
    </div>

    <div class="action-container">
      <BaseButton class="button-primary" @click="handleClickCreateLink">
        링크 생성하기
      </BaseButton>

      <a
        class="action-container__help-link font__caption"
        @click="openModal('WhatIsMailBoxLink')"
      >
        인편함 링크라는 게 뭔가요?
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { toKoreanDateString } from '@/utils/TextFormatter'
import { openModal } from '@/utils/DialogHandler'

import Emoji from '@/components/Decorator/Emoji.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

/* Vuex */
const store = useStore()
const soldier = computed(() => store.state.registerForm.soldier)

/* Router */
const router = useRouter()

/* Event Handler */
const handleClickCreateLink = () => router.push({ name: 'TermsAndConditions' })
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
  padding: 32px;
}
.submitted-form {
  &-row {
    padding: 16px 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__divider {
    width: 100%;
    height: 0;
    border-bottom: 1px solid $gray2;
  }
}
.action-container {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__help-link {
    margin-top: 24px;
    width: fit-content;
    text-decoration: none;
    color: $gray4;
    border-bottom: 1px solid $gray4;
  }
}
</style>
