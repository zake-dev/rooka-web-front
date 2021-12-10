<template>
  <button class="button delete-button" @click="handleOpenMailDeleteModal">
    <img :src="TrashIconSvg" />
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'

import TrashIconSvg from '@/assets/icons/trash-icon.svg'

export default {
  setup() {
    /* Event Handler */
    const handleOpenMailDeleteModal = () => openModal('ConfirmDeleteMail')

    return {
      /* Assets */
      TrashIconSvg,
      /* Functions */
      handleOpenMailDeleteModal,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.delete-button {
  width: 96px;
  height: 100%;
  min-height: 56px;
  color: $gray5;

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
}
</style>
