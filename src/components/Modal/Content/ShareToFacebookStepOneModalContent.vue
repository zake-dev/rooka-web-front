<template>
  <div class="modal-content">
    <div class="modal-content-title">
      <span class="modal-content-title__text font__page-title"
        >페이스북 공유</span
      >
      <ModalButtonClose />
    </div>

    <div class="modal-content-body masked-overflow">
      <span class="modal-content-body__step font__tag">STEP 1</span>
      <span class="modal-content-body__title font__content-title"
        >본문을 복사해주세요!</span
      >

      <div class="modal-content-body__template">{{ template }}</div>

      <div class="modal-content-buttons">
        <BaseButton class="button-secondary" @click="handleCopyText"
          >본문 복사하기</BaseButton
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
import { toKoreanDateString } from '@/utils/TextFormatter'

import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    ModalButtonClose,
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() =>
      store.state.mailBox.key
        ? store.state.mailBox.soldier
        : store.state.registerForm.soldier,
    )
    const template = computed(
      () =>
        `📮${soldier.value.name} 인편 주소 나왔어요📮\n\n🔗rooka.kr/${
          soldier.value.key
        }\n\n안녕하세요, ${soldier.value.name}의 인편지기입니다!\n${
          soldier.value.name
        }가 ${toKoreanDateString(
          soldier.value.enterDate,
        )}에 훈련소에 입소했습니다.\n열심히 훈련받고 있을 ${
          soldier.value.name
        }를 위해 짧게나마 응원의 메시지를 적어서 편지를 보내 주시면 감사하겠습니다!\n\n아래 링크를 통해 정보 입력 없이 바로 편지를 작성할 수 있어요🤗\n\n💌루카에서 인편 쓰는 방법💌\n❶ 아래 링크를 통해 ${
          soldier.value.name
        }의 인편함으로 간다.\n❷ 편지 쓰기 버튼을 눌러 바로 편지를 작성한다.`,
    )

    /* Event Handler */
    const handleCopyText = async () => {
      await navigator.clipboard.writeText(template.value)
      alert('본문이 복사되었어요👍')
      openModal('ShareToFacebookStepTwo')
    }

    return {
      /* Variables */
      template,
      /* Functions */
      openModal,
      handleCopyText,
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
    &__template {
      margin: 16px 0;
      padding: 24px 16px;
      border-radius: 7px;
      white-space: pre-line;
      background-color: $gray1;
      color: $gray5;
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
