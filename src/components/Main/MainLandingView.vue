<template>
  <div class="view-wrapper">
    <div class="view-title">
      <span class="view-title__text">당신을 위한</span>
      <span class="view-title__text view-title__text--accent"
        >심플한 인편함</span
      >
    </div>

    <div class="view-content">
      <div class="view-background">
        <img class="view-background__image" :src="MainBackgroundPng" />
      </div>

      <div class="view-actions">
        <BaseButton
          class="view-actions__button button-primary"
          @click="handleNavigateToRegisterForm"
          >편지 쓰러 가기</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import MainBackgroundPng from '@/assets/images/main-background.png'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
  setup() {
    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleNavigateToRegisterForm = () => router.push('/register/form')

    return {
      /* Assets */
      MainBackgroundPng,
      /* Functions */
      handleNavigateToRegisterForm,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.view-title {
  padding: 32px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 0;

  &__text {
    @extend .font__title;

    &--accent {
      color: $rookaYellow;
    }
  }
}

.view-content {
  flex: 1;
  position: relative;
}

.view-background {
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.view-actions {
  position: absolute;
  bottom: 68px;
  height: 48px;
  width: 100%;
  padding: 0 72px;
  z-index: 1;

  &__button {
    box-shadow: 0px 1px 20px -1px rgba(0, 0, 0, 0.25);
  }
}
</style>
