<template>
  <div class="modal-content">
    <ModalButtonClose></ModalButtonClose>

    <div class="modal-content-body masked-overflow">
      <p class="modal-content-body__question-text font__input-label mb-2">
        Q. 인터넷 편지함 링크라는 게 뭔가요?
      </p>
      <p class="modal-content-body__answer-text font__page-title mb-3">
        A. 인편 작성을 위한 훈련병 정보 입력 없이 바로 인편을 작성할 수 있는
        링크랍니다!
      </p>
      <p class="modal-content-body__text font__content-text">
        그동안 인편을 쓰기 위해서는 감수해야 할 것들이 많았어요. 일단 먼저 앱을
        설치하거나 쓰기 불편한 웹사이트에 접속해야만 했죠. 그리고 훈련병의
        생년월일을 포함한 여러가지 정보를 입력해야만 했어요. 이렇게 복잡한
        과정을 거쳐야 한다면 인편을 쓰는 것이 그리 즐겁지만은 않겠죠?<br /><br />

        하지만 걱정하지 마세요! 이제 링크 하나로 이런 과정을 다 생략할 수
        있답니다. 루카에서 한 번 편지함 링크를 생성하면 이후에는 훈련병의 정보를
        따로 입력할 필요 없이 링크를 통해 바로 편지함으로 들어갈 수 있어요.<br /><br />

        이렇게 생성된 링크를 공유하면 누구나 쉽게 훈련병에게 인편을 쓸 수가
        있겠죠? 지금 바로 인터넷 편지함 링크를 생성해보세요!
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
  height: 433px;
  padding: 32px;
}
.modal-content-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 22px;

  &__question-text {
    color: $gray3;
  }
  &__answer-text {
    word-break: keep-all;
    color: $gray5;
  }
  &__text {
    color: $gray5;
  }
}
</style>
