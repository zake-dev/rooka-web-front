<template>
  <button class="button list-button" @click="handleBackToMailBox">
    <img :src="ListIconSvg" />
  </button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

import ListIconSvg from '@/assets/icons/list-icon.svg'

export default {
  setup() {
    /* Router */
    const router = useRouter()
    const route = useRoute()

    /* Event Handler */
    const handleBackToMailBox = () => router.push(`/${route.params.key}/mail`)

    return {
      /* Assets */
      ListIconSvg,
      /* Functions */
      handleBackToMailBox,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.list-button {
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
