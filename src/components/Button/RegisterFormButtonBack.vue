<template>
  <button class="button" @click="handleDecreaseStep">
    <img class="button__icon" :src="LeftArrowIconPng" />
    <span class="font__button-text">이전</span>
  </button>
</template>

<script>
import { useStore } from 'vuex'

import LeftArrowIconPng from '@/assets/icons/left-arrow-icon.png'

export default {
  setup() {
    /* Vuex */
    const store = useStore()

    /* Event Handler */
    const handleDecreaseStep = () =>
      store.dispatch('registerForm/DECREASE_STEP')

    return {
      /* Assets */
      LeftArrowIconPng,
      /* Functions */
      handleDecreaseStep,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.button {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  transform: translate(-1rem, 1rem);

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
