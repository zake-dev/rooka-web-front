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
        >카드 이미지를 저장해 주세요!</span
      >

      <SoldierCard
        class="modal-content-body__image"
        :uuid="linkImageUUID"
      ></SoldierCard>

      <div class="modal-content-buttons">
        <BaseButton class="button-secondary" @click="handleDownloadAndGoNext"
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

import { useImageDownloader } from '@/composables/useImageDownloader'
import { openModal } from '@/utils/DialogHandler'

import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'
import BaseButton from '@/components/Button/BaseButton.vue'
import SoldierCard from '@/components/SoldierCard/SoldierCard.vue'

export default {
  components: {
    ModalButtonClose,
    BaseButton,
    SoldierCard,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const linkImageUUID = computed(
      () =>
        store.state.registerForm.linkImageUUID ??
        store.state.mailBox.linkImageUUID,
    )

    /* Event Handler */
    const { handleDownloadImage } = useImageDownloader()
    const handleDownloadAndGoNext = () => {
      handleDownloadImage(linkImageUUID.value, 'rooka-공유-이미지.png')
      openModal('ShareToInstagramStepTwo')
    }

    return {
      /* Variables */
      linkImageUUID,
      /* Functions */
      openModal,
      handleDownloadAndGoNext,
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

    &__link {
      flex: 0;
      color: $gray5;
      border-bottom: 1px solid $gray5;
    }
  }
}
</style>
