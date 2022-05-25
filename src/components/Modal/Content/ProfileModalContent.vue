<template>
  <div class="modal-content masked-overflow">
    <ModalButtonClose />

    <div class="modal-content-profile">
      <img
        class="modal-content-profile__image mb-2"
        :src="SoldierInfoDefaultPng"
      />
      <p class="modal-content-profile__name font__semi-title mb-3">
        {{ shortenName(soldier.name) }} 훈련병
      </p>

      <div class="modal-content-profile-info mt-3">
        <div class="modal-content-profile-row">
          <span class="modal-content-profile-row__label font__content-title">
            생년월일
          </span>
          <span class="modal-content-profile-row__text font__content-text">
            {{ toKoreanDateString(soldier.birthDate) }}
          </span>
        </div>
        <div class="modal-content-profile-row">
          <span class="modal-content-profile-row__label font__content-title">
            군종
          </span>
          <span class="modal-content-profile-row__text font__content-text">
            공군
          </span>
        </div>
        <div class="modal-content-profile-row">
          <span class="modal-content-profile-row__label font__content-title">
            입대일
          </span>
          <span class="modal-content-profile-row__text font__content-text">
            {{ toKoreanDateString(soldier.enterDate) }}
          </span>
        </div>
        <div class="modal-content-profile-row">
          <span class="modal-content-profile-row__label font__content-title">
            소속
          </span>
          <span class="modal-content-profile-row__text font__content-text">{{
            soldier.trainingCenterDetail
          }}</span>
        </div>
        <div class="modal-content-profile-row">
          <span class="modal-content-profile-row__label font__content-title">
            기수
          </span>
          <span class="font__content-text">{{ soldier.kisu }}기</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { toKoreanDateString, shortenName } from '@/utils/TextFormatter'

import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'
import SoldierInfoDefaultPng from '@/assets/images/soldier-info-default.png'

/* Vuex */
const store = useStore()
const soldier = computed(() => store.state.mailBox.soldier)
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  flex: 1;
  width: 100%;
  max-height: 80vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.modal-content-profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $gray6;

  &__name {
    color: $gray6;
  }
  &-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &-row {
    margin-bottom: 8px;
    width: 100%;
    display: inline-flex;

    &__label {
      min-width: 4rem;
      margin-right: 1rem;
      color: $gray6;
    }
    &__text {
      color: $gray5;
    }
  }
  &__image {
    height: 72px;
    width: 72px;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
