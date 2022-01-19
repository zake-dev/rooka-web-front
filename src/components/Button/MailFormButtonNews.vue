<template>
  <button class="button news-button" @click="handleOpenNewsModal" disabled>
    <img :src="NewsButtonIconSvg" />
  </button>
</template>

<script>
import NewsButtonIconSvg from '@/assets/icons/news-button-icon.svg'

import { showToast } from '@/utils/ToastHandler'

export default {
  setup() {
    /* Event Handler */
    const handleOpenNewsModal = () =>
      showToast('아직 제공되지 않는 서비스입니다.')

    return {
      /* Assets */
      NewsButtonIconSvg,
      /* Functions */
      handleOpenNewsModal,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.news-button {
  width: 96px;
  height: 100%;
  min-height: 56px;
  color: $gray5;

  &:disabled {
    background-color: white !important;

    & img {
      opacity: 0.2;
    }
  }
}
img {
  width: 21px;
  height: 21px;
}
</style>
