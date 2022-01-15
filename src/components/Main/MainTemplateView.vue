<template>
  <div class="view-wrapper">
    <div class="view-content">
      <span class="view-content__title">공유도 템플릿으로</span>
      <span class="view-content__title">쉽고 빠르게</span>
      <p class="view-content__text pt-3">
        더 많은 인편을 받으려면 많은 사람들에게 공유를 해야겠죠? SNS 공유
        템플릿이 있으니 걱정 마세요. 버튼만 누르면 나머지는 rooka가 알아서
        할게요!
      </p>
    </div>

    <div class="view-templates">
      <div class="view-templates-display">
        <transition name="fade" mode="out-in">
          <object
            v-if="isShowImageTemplate"
            class="view-templates-display__image"
            :data="ImageTemplateSvg"
          />
          <object
            v-else
            class="view-templates-display__image"
            :data="TextTemplateSvg"
          />
        </transition>
      </div>
      <div class="view-templates-buttons">
        <button
          class="view-templates-buttons__button"
          :class="{
            'view-templates-buttons__button--active': isShowImageTemplate,
          }"
          @click="handleShowImageTemplate"
        >
          이미지 템플릿
        </button>
        <button
          class="view-templates-buttons__button"
          :class="{
            'view-templates-buttons__button--active': !isShowImageTemplate,
          }"
          @click="handleShowTextTemplate"
        >
          텍스트 템플릿
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import ImageTemplateSvg from '@/assets/images/main-image-template.svg'
import TextTemplateSvg from '@/assets/images/main-text-template.svg'

export default {
  setup() {
    /* Local State */
    const isShowImageTemplate = ref(true)

    /* Event Handler */
    const handleShowImageTemplate = () => (isShowImageTemplate.value = true)
    const handleShowTextTemplate = () => (isShowImageTemplate.value = false)

    return {
      /* Assets */
      ImageTemplateSvg,
      TextTemplateSvg,
      /* Variables*/
      isShowImageTemplate,
      /* Functions */
      handleShowImageTemplate,
      handleShowTextTemplate,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.view-wrapper {
  position: relative;
  background-color: $gray1;
}

.view-content {
  padding: 80px 32px 8px;
  display: flex;
  flex-direction: column;
  z-index: 0;

  &__title {
    @extend .font__title;
    color: $black;
  }

  &__text {
    @extend .font__content-text;
    color: $gray5;
  }
}

.view-templates {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &-display {
    width: calc(100vw - 64px);
    height: calc(100vw - 64px);
    box-shadow: 0px 6px 17px -1px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    overflow: hidden;
    background-color: $white;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-buttons {
    display: flex;
    flex-direction: row;
    gap: 16px;

    &__button {
      @extend .font__button-text;
      flex: 1;
      border: none;
      background-color: transparent;
      color: $gray3;
      display: flex;
      justify-content: center;
      align-items: center;

      &--active {
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-color: $rookaYellow;
        color: $rookaYellow;
      }
    }
  }
}
</style>
