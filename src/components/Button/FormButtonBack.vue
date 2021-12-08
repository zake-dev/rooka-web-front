<template>
  <button class="button">
    <img class="button__icon" :src="LeftArrowIconSvg" />
    <span class="font__button-text">이전</span>
  </button>
</template>

<script>
import LeftArrowIconSvg from '@/assets/icons/left-arrow-icon.svg'

export default {
  setup() {
    return {
      /* Assets */
      LeftArrowIconSvg,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.button {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;

  &__icon {
    width: 24px;
    height: 24px;
    color: $black;
  }
}
</style>
