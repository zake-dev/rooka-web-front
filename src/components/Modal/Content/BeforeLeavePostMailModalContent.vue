<template>
  <div class="modal-content">
    <span class="modal-content__text font-mobile__page-title mt-3"
      >작성을 그만두시나요?</span
    >

    <span class="modal-content__text font-mobile__button-text my-2"
      >작성중인 내용은 저장되지 않아요.</span
    >

    <div class="modal-actions mt-1 mx-2">
      <RoundedButton
        class="button-gray"
        text="그만두기"
        @click="handleClickLeaveRoute"
      ></RoundedButton>
      <RoundedButton
        class="button-dark"
        text="취소"
        @click="handleClickCloseModal"
      ></RoundedButton>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import RoundedButton from '@/components/Button/RoundedButton.vue'

export default {
  components: {
    RoundedButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const leavingRoute = computed(() => store.state.mail.leavingRoute)

    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleClickLeaveRoute = () => {
      store.dispatch('mail/UPDATE_IS_CONFIRMED_TO_LEAVE', true)
      router.push(leavingRoute.value)
      store.dispatch('CLOSE_MODAL')
    }
    const handleClickCloseModal = () => store.dispatch('CLOSE_MODAL')

    return {
      /* Functions */
      handleClickLeaveRoute,
      handleClickCloseModal,
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
