<template>
  <button class="button info-button">
    <img class="info-button__image" :src="InfoIconPng" />
  </button>
</template>

<script>
import InfoIconPng from '@/assets/icons/info-icon.png'

export default {
  setup() {
    return {
      InfoIconPng,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.info-button {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__image {
    height: 16px;
    width: 16px;
  }
}
</style>
