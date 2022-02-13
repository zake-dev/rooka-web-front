<template>
  <button class="button photo-menu-button">
    <img class="photo-menu-button__icon" :src="PhotoButtonIconPng" />
  </button>
</template>

<script>
import PhotoButtonIconPng from '@/assets/icons/photo-button-icon.png'

export default {
  setup() {
    return {
      /* Assets */
      PhotoButtonIconPng,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.photo-menu-button {
  width: 96px;
  height: 100%;
  min-height: 56px;

  &__icon {
    width: 21px;
    height: 21px;
  }
}
</style>
