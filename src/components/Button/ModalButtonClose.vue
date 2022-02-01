<template>
  <button class="button" @click="closeModal">
    <img class="close-icon" :src="CloseModalIconPng" />
  </button>
</template>

<script>
import { closeModal } from '@/utils/DialogHandler'

import CloseModalIconPng from '@/assets/icons/close-modal-icon.png'

export default {
  setup() {
    return {
      /* Assets */
      CloseModalIconPng,
      /* Functions */
      closeModal,
    }
  },
}
</script>

<style scoped lang="scss">
.button {
  width: 23px;
  min-height: 23px;
  border-radius: 50%;
}
.close-icon {
  width: 23px;
  height: 23px;
}
</style>
