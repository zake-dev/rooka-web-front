<template>
  <div class="modal-content">
    <ModalButtonClose />

    <div class="modal-content-body masked-overflow">
      <p class="modal-content-body__question-text font__content-title mb-2">
        Q. 해군/해병대는 왜 없나요?
      </p>
      <p class="modal-content-body__answer-text font__page-title mb-3">
        A. 하루에 받을 수 있는 인터넷 편지의 수량에 제한이 있기 때문입니다.
      </p>
      <p class="modal-content-body__text font__content-text">
        해군은 하루에 4통, 해병대는 하루에 1통으로 제한이 되어 있어요.<br />
        rooka에서는 해군과 해병대는 지원을 하지 않습니다 😭
      </p>
    </div>
  </div>
</template>

<script>
import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'

export default {
  components: {
    ModalButtonClose,
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-height: 60vh;
  padding: 24px;
}
.modal-content-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 22px;

  &__question-text {
    color: $gray4;
  }
  &__answer-text {
    word-break: keep-all;
    color: $gray6;
  }
  &__text {
    color: $gray6;
  }
}
</style>
