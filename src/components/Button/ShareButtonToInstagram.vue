<template>
  <button class="button" @click="handleShareToInstagram">
    <div class="button-icon-wrapper">
      <img class="button-icon-wrapper__icon" :src="InstagramIconPng" />
    </div>
    <span class="button-label font__caption">인스타그램</span>
  </button>
</template>

<script>
import { openModal } from '@/utils/DialogHandler'

import InstagramIconPng from '@/assets/icons/instagram-icon.png'

export default {
  setup() {
    /* Event Handler */
    const handleShareToInstagram = () => openModal('ShareToInstagramStepOne')

    return {
      /* Assets */
      InstagramIconPng,
      /* Functions */
      handleShareToInstagram,
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
      width: 20px;
      height: 20px;
    }
  }

  &-label {
    color: $gray6;
  }
}
</style>
