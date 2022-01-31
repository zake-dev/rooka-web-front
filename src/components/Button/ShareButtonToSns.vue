<template>
  <button
    class="button button-dark sns-button"
    @click="openModal('ShareToSns')"
  >
    <img class="sns-button__icon" :src="ShareIconPng" />
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'
import ShareIconPng from '@/assets/icons/share-icon.png'

export default {
  setup() {
    return {
      ShareIconPng,
      openModal,
    }
  },
}
</script>

<style lang="scss" scoped>
.sns-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__icon {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
}
</style>
