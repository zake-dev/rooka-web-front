<template>
  <button class="button photo-menu-button">
    <img :src="PhotoButtonIconSvg" />
  </button>
</template>

<script>
import PhotoButtonIconSvg from '@/assets/icons/photo-button-icon.svg'

export default {
  setup() {
    return {
      /* Assets */
      PhotoButtonIconSvg,
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
  color: $gray5;
}
img {
  width: 21px;
  height: 21px;
}
</style>
