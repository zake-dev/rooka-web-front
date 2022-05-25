<template>
  <transition name="fade">
    <div v-if="isVisible" class="modal-wrapper">
      <div class="modal__dismiss-area" @click="handleCloseModal"></div>

      <transition name="pop" appear>
        <div class="modal-card">
          <transition name="fade" mode="out-in">
            <Component :is="ModalContent" />
          </transition>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import WhatIsMailBoxLinkModalContent from '@/components/Modal/Content/WhatIsMailBoxLinkModalContent.vue'
import ProfileModalContent from '@/components/Modal/Content/ProfileModalContent.vue'
import RequestPasswordToViewModalContent from '@/components/Modal/Content/RequestPasswordToViewModalContent.vue'
import RequestPasswordToDeleteModalContent from '@/components/Modal/Content/RequestPasswordToDeleteModalContent.vue'
import SetPasswordModalContent from '@/components/Modal/Content/SetPasswordModalContent.vue'
import BeforeLeavePostMailModalContent from '@/components/Modal/Content/BeforeLeavePostMailModalContent.vue'
import ShareToSnsModalContent from '@/components/Modal/Content/ShareToSnsModalContent.vue'
import ShareToInstagramStepOneModalContent from '@/components/Modal/Content/ShareToInstagramStepOneModalContent.vue'
import ShareToInstagramStepTwoModalContent from '@/components/Modal/Content/ShareToInstagramStepTwoModalContent.vue'
import ShareToInstagramStepThreeModalContent from '@/components/Modal/Content/ShareToInstagramStepThreeModalContent.vue'
import ShareToFacebookStepOneModalContent from '@/components/Modal/Content/ShareToFacebookStepOneModalContent.vue'
import ShareToFacebookStepTwoModalContent from '@/components/Modal/Content/ShareToFacebookStepTwoModalContent.vue'
import ConfirmDeleteMailModalContent from '@/components/Modal/Content/ConfirmDeleteMailModalContent'

export default {
  components: {
    WhatIsMailBoxLinkModalContent,
    ProfileModalContent,
    RequestPasswordToViewModalContent,
    RequestPasswordToDeleteModalContent,
    SetPasswordModalContent,
    BeforeLeavePostMailModalContent,
    ShareToSnsModalContent,
    ShareToInstagramStepOneModalContent,
    ShareToInstagramStepTwoModalContent,
    ShareToInstagramStepThreeModalContent,
    ShareToFacebookStepOneModalContent,
    ShareToFacebookStepTwoModalContent,
    ConfirmDeleteMailModalContent,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const isVisible = computed(() => store.state.isModalVisible)
    const ModalContent = computed(
      () => store.state.modalContentName + 'ModalContent',
    )

    /* Event Handler */
    const handleCloseModal = () => store.dispatch('CLOSE_MODAL')

    return {
      /* Components */
      ModalContent,
      /* Variables */
      isVisible,
      /* Functions */
      handleCloseModal,
    }
  },
}
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9997;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__dismiss-area {
  position: absolute;
  z-index: 9998;
  height: 100%;
  width: 100%;
  background-color: #00000070;
  backdrop-filter: blur(2px);
}
.modal-card {
  position: absolute;
  z-index: 9999;
  height: auto;
  width: calc(100% - 32px);
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  justify-content: center;
}
</style>
