<template>
  <div class="modal-content">
    <span class="modal-content__text font__page-title mt-3"
      >작성을 그만두시나요?</span
    >

    <span class="modal-content__text font__button-text my-2"
      >작성중인 내용은 저장되지 않아요.</span
    >

    <div class="modal-actions mt-1 mx-2">
      <BaseButton class="button-secondary" @click="handleClickLeaveRoute"
        >그만두기</BaseButton
      >
      <BaseButton class="button-primary" @click="closeModal">취소</BaseButton>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { closeModal } from '@/utils/DialogHandler'

import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const leavingRoute = computed(() => store.state.mailForm.leavingRoute)

    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleClickLeaveRoute = () => {
      store.dispatch('mailForm/UPDATE_IS_CONFIRMED_TO_LEAVE', true)
      router.push(leavingRoute.value)
      closeModal()
    }

    return {
      /* Functions */
      handleClickLeaveRoute,
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

  &__text {
    color: $gray6;
    text-align: center;
  }
}
.modal-actions {
  flex: 1;
  display: flex;
  justify-content: stretch;
  gap: 16px;
}
</style>
