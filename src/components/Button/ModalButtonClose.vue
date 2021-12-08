<template>
  <button class="button" @click="closeModal">
    <img :src="ExitButtonIconSvg" />
  </button>
</template>

<script>
import { closeModal } from '@/utils/DialogHandler'

import ExitButtonIconSvg from '@/assets/icons/exit-button-icon.svg'

export default {
  setup() {
    return {
      /* Assets */
      ExitButtonIconSvg,
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
</style>
