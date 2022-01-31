<template>
  <button class="button send-button" @click="handleSendMail">
    <img class="send-button__image" :src="SendButtonIconPng" />
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'

import SendButtonIconPng from '@/assets/icons/send-button-icon.png'

export default {
  setup() {
    /* Event Handler */
    const handleSendMail = () => openModal('SetPassword')

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
