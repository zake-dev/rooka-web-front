<template>
  <button class="button delete-button" @click="handleOpenMailDeleteModal">
    <img class="delete-button__image" :src="TrashButtonIconPng" />
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'

import TrashButtonIconPng from '@/assets/icons/trash-button-icon.png'

export default {
  setup() {
    /* Event Handler */
    const handleOpenMailDeleteModal = () => openModal('ConfirmDeleteMail')

    return {
      /* Assets */
      TrashButtonIconPng,
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

  &__image {
    width: 21px;
    height: 21px;
  }
}
</style>
