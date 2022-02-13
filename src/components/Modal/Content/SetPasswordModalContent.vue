<template>
  <div class="modal-content">
    <span class="modal-content__title font__page-title">비밀번호 설정</span>
    <FormInput
      class="mx-2"
      type="password"
      v-model="password"
      placeholder="비밀번호를 입력해 주세요"
    />

    <span class="modal-content__title font__page-title">비밀번호 확인</span>
    <div class="input-area mx-2">
      <span
        v-if="isInvalidPassword"
        class="input-area__text--invalid font__caption"
        >비밀번호가 일치하지 않아요!</span
      >
      <FormInput
        class="input-area__input"
        type="password"
        v-model="passwordConfirmation"
        placeholder="비밀번호를 다시 한 번 입력해 주세요"
      />
    </div>

    <div class="modal-actions mt-3 mx-2">
      <BaseButton class="button-secondary" @click="closeModal">취소</BaseButton>
      <BaseButton
        class="button-primary"
        @click="handleSubmitMail"
        :disabled="!isSendable"
        >편지 보내기</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { closeModal } from '@/utils/DialogHandler'

import FormInput from '@/components/Form/FormInput.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    FormInput,
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()

    /* Router */
    const route = useRoute()

    /* Local State */
    const password = ref('')
    const passwordConfirmation = ref('')
    const isSendable = computed(
      () => password.value !== '' && passwordConfirmation.value !== '',
    )
    const isInvalidPassword = ref(false)

    /* Event Handler */
    const handleSubmitMail = () => {
      const validate = () => {
        isInvalidPassword.value = password.value !== passwordConfirmation.value
        return !isInvalidPassword.value
      }

      if (validate()) {
        store.dispatch('mailForm/UPDATE_KEY', route.params.key)
        store.dispatch('mailForm/UPDATE_PASSWORD', password.value)
        store.dispatch('mailForm/SEND_MAIL')
        closeModal()
      }
    }

    return {
      /* Variables */
      password,
      passwordConfirmation,
      isSendable,
      isInvalidPassword,
      /* Functions */
      handleSubmitMail,
      closeModal,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;

  &__title {
    margin: 8px;
    padding-top: 8px;
    color: $gray6;
  }
}
.modal-actions {
  flex: 1;
  display: flex;
  justify-content: stretch;
  gap: 16px;
}
.input-area {
  flex: 1;
  position: relative;
  display: flex;

  &__input {
    width: 100%;
  }

  &__text {
    &--invalid {
      position: absolute;
      right: 0;
      top: -1.25rem;
      color: $warningRed;
    }
  }
}
</style>
