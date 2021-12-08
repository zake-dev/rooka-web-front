<template>
  <div class="modal-content">
    <span class="modal-content__title font__page-title">비밀번호 입력</span>
    <div class="input-area mx-2">
      <span
        v-if="isInvalidPassword"
        class="input-area__text--invalid font__caption"
        >비밀번호가 맞지 않아요!</span
      >
      <FormInput
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요"
      ></FormInput>
    </div>

    <div class="modal-actions mt-3 mx-2">
      <BaseButton
        class="button-gray"
        text="취소"
        @click="handleClickCloseModal"
      ></BaseButton>
      <BaseButton
        class="button-dark"
        text="확인"
        @click="handleSubmitPassword"
      ></BaseButton>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

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
    const id = computed(() => store.state.mail.mail.id)

    /* Router */
    const router = useRouter()
    const route = useRoute()
    const key = route.params.key

    /* Local State */
    const password = ref('')
    const isInvalidPassword = ref(false)

    /* Event Handler */
    const handleClickCloseModal = () => store.dispatch('CLOSE_MODAL')
    const handleSubmitPassword = async () => {
      try {
        await store.dispatch('mail/FETCH_MAIL', password.value)
        router.push(`/${key}/mail/${id.value}`)
        store.dispatch('CLOSE_MODAL')
      } catch (e) {
        switch (e.response.status) {
          case 403:
            isInvalidPassword.value = true
            break
        }
      }
    }

    return {
      /* Variables */
      password,
      isInvalidPassword,
      /* Functions */
      handleClickCloseModal,
      handleSubmitPassword,
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
    color: $gray5;
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
