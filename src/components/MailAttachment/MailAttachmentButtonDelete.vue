<template>
  <button class="delete-button" @click="handleDeleteAttachment">
    <img class="delete-button__icon" :src="AttachmentTrashIconPng" />
  </button>
</template>

<script>
import { useStore } from 'vuex'

import AttachmentTrashIconPng from '@/assets/icons/attachment-trash-icon.png'

export default {
  setup() {
    /* Vuex */
    const store = useStore()

    /* Event Handler */
    const handleDeleteAttachment = () =>
      store.dispatch('mailForm/UPDATE_IMAGE_UUID', '')

    return {
      /* Assets */
      AttachmentTrashIconPng,
      /* Functions */
      handleDeleteAttachment,
    }
  },
}
</script>

<style lang="scss" scoped>
.delete-button {
  height: 21px;
  width: 21px;
  border: none;
  border-radius: 50%;
  overflow: hidden;

  &__icon {
    height: 21px;
    width: 21px;
  }
}
</style>
