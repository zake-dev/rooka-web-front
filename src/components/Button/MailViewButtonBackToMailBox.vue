<template>
  <button class="button list-button" @click="handleBackToMailBox">
    <img class="list-button__image" :src="ListButtonIconPng" />
  </button>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

import ListButtonIconPng from '@/assets/icons/list-button-icon.png'

export default {
  setup() {
    /* Router */
    const router = useRouter()
    const route = useRoute()

    /* Event Handler */
    const handleBackToMailBox = () => router.push(`/${route.params.key}/mail`)

    return {
      /* Assets */
      ListButtonIconPng,
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

  &__image {
    width: 21px;
    height: 21px;
  }
}
</style>
