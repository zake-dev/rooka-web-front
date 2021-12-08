<template>
  <button class="button" @click="handleShareToFacebook">
    <div class="button-icon-wrapper">
      <img class="button-icon-wrapper__icon" :src="FacebookIconSvg" />
    </div>
    <span class="button-label font-mobile__caption">페이스북</span>
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'

import FacebookIconSvg from '@/assets/icons/facebook-icon.svg'

export default {
  setup() {
    /* Event Handler */
    const handleShareToFacebook = () => openModal('ShareToFacebookStepOne')

    return {
      /* Assets */
      FacebookIconSvg,
      /* Functions */
      handleShareToFacebook,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.button {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;

  &:hover {
    background-color: $gray2;
  }

  &-icon-wrapper {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $gray1;

    &__icon {
      width: 13px;
      height: 26px;
    }
  }

  &-label {
    color: $gray6;
  }
}
</style>
