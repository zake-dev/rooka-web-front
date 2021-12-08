<template>
  <div class="modal-content">
    <div class="modal-content-title">
      <span class="modal-content-title__text font-mobile__page-title"
        >인스타그램 공유</span
      >
      <ModalButtonClose></ModalButtonClose>
    </div>

    <div class="modal-content-body masked-overflow">
      <span class="modal-content-body__step font-mobile__tag">STEP 3</span>
      <span class="modal-content-body__title font-mobile__content-title"
        >인스타그램에 공유해주세요!</span
      >

      <div class="modal-content-buttons">
        <RoundedButton
          class="modal-content-buttons__button button-gray"
          text="인스타그램 열기"
          @click="handleOpenInstagram"
        ></RoundedButton>
        <a
          class="modal-content-buttons__link font-mobile__caption"
          @click="openModal('ShareToInstagramStepTwo')"
          >이전 단계</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'

import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'
import RoundedButton from '@/components/Button/RoundedButton.vue'

export default {
  components: {
    ModalButtonClose,
    RoundedButton,
  },
  setup() {
    /* Event Handler */
    const handleOpenInstagram = () => window.open('https://www.instagram.com')

    return {
      /* Functions */
      openModal,
      handleOpenInstagram,
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
  }
  &-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
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
