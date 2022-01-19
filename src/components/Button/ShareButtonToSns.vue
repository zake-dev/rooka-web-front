<template>
  <button
    class="button button-dark share-button"
    @click="openModal('ShareToSns')"
  >
    <img :src="ShareIconSvg" class="share-button__icon" />
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'
import ShareIconSvg from '@/assets/icons/share-icon.svg'

export default {
  setup() {
    return {
      ShareIconSvg,
      openModal,
    }
  },
}
</script>

<style lang="scss" scoped>
.share-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__icon {
    width: 16px;
    height: 18px;
    margin-right: 2px;
  }
}
</style>
