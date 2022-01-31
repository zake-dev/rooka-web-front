<template>
  <button class="button send-button" @click="handleSendMail">
    <img :src="SendButtonIconSvg" />
  </button>
</template>

<script>
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'
import { showToast } from '@/utils/ToastHandler'

import SendButtonIconSvg from '@/assets/icons/send-button-icon.svg'

export default {
  setup() {
    /* Vuex */
    const store = useStore()

    const handleSendMail = async () => {
      const isAllValid = await store.dispatch('mailForm/UPDATE_ALL_VALIDATION')
      if (isAllValid) openModal('SetPassword')
      else showToast('What?')
    }

    return {
      /* Assets */
      SendButtonIconSvg,
      /* Functions */
      handleSendMail,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.send-button {
  width: 96px;
  height: 100%;
  min-height: 56px;

  &:disabled {
    background-color: white !important;

    & img {
      opacity: 0.2;
    }
  }
}
img {
  width: 21px;
  height: 21px;
  transition: opacity 0.3s ease;
}
</style>
