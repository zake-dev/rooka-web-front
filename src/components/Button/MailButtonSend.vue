<template>
  <button
    class="button send-button"
    @click="handleSendMail"
    :disabled="!isSendable"
  >
    <img :src="SendButtonIconSvg" />
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'

import SendButtonIconSvg from '@/assets/icons/send-button-icon.svg'

export default {
  setup() {
    /* Vuex */
    const store = useStore()
    const isSendable = computed(() => store.getters['mailForm/isSendable'])

    /* Event Handler */
    const handleSendMail = () => openModal('SetPassword')

    return {
      /* Assets */
      SendButtonIconSvg,
      /* Variables */
      isSendable,
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
