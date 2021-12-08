<template>
  <div class="modal-content">
    <div class="modal-content-title">
      <span class="modal-content-title__text font__page-title"
        >인스타그램 공유</span
      >
      <ModalButtonClose />
    </div>

    <div class="modal-content-body masked-overflow">
      <span class="modal-content-body__step font__tag">STEP 1</span>
      <span class="modal-content-body__title font__content-title"
        >카드 이미지를 저장해주세요!</span
      >

      <SoldierCard
        class="modal-content-body__image"
        :soldier="soldier"
      ></SoldierCard>

      <div class="modal-content-buttons">
        <BaseButton
          class="modal-content-buttons__button button-secondary"
          @click="handleDownloadLinkImage"
          >이미지 저장하기</BaseButton
        >
        <a
          class="modal-content-buttons__link font__caption"
          @click="openModal('ShareToSns')"
          >이전 단계</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'

import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'
import BaseButton from '@/components/Button/BaseButton.vue'
import SoldierCard from '@/components/Card/SoldierCard'

export default {
  components: {
    ModalButtonClose,
    BaseButton,
    SoldierCard,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() =>
      store.state.mailBox.key
        ? store.state.mailBox.soldier
        : store.state.registerForm,
    )

    /* Event Handler */
    const handleDownloadLinkImage = () => {
      openModal('ShareToInstagramStepTwo')
    }

    return {
      /* Variables */
      soldier,
      /* Functions */
      openModal,
      handleDownloadLinkImage,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: 80vh;
  padding: 24px;
  padding-bottom: 0;

  &-title {
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      color: $gray6;
    }
  }
  &-body {
    padding-top: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &__step {
      color: $rookaYellow;
    }
    &__title {
      color: $gray6;
    }
    &__image {
      min-width: calc(100vw - 80px);
      min-height: calc(100vw - 80px);
      margin: 16px 0;
    }
  }
  &-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0 32px;

    &__button {
      width: 100%;
    }
    &__link {
      flex: 0;
      color: $gray5;
      border-bottom: 1px solid $gray5;
    }
  }
}
</style>
