<template>
  <button class="button send-button" @click="handleSendMail">
    <img class="send-button__image" :src="SendButtonIconPng" />
  </button>
</template>

<script>
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'

import SendButtonIconPng from '@/assets/icons/send-button-icon.png'

export default {
  setup() {
    /* Vuex */
    const store = useStore()

    const handleSendMail = async () => {
      const isAllValid = await store.dispatch('mailForm/UPDATE_ALL_VALIDATION')
      if (isAllValid) openModal('SetPassword')
    }

    return {
      /* Assets */
      SendButtonIconPng,
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

  &__image {
    width: 21px;
    height: 21px;
  }
}
</style>
