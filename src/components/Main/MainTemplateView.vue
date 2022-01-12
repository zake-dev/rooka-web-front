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
          <keep-alive>
            <img
              v-if="isShowImageTemplate"
              class="view-templates-display__image"
              :src="ImageTemplatePng"
            />
            <div v-else class="view-templates-display__text masked-overflow">
              📮김루카 인편 주소 나왔어요📮<br /><br />
              🔗 rooka.kr/김루카.1595<br /><br />
              안녕하세요 김루카의 인편지기입니다!<br />
              루카가 3월 21일에 공군훈련소에 입소했습니다.<br />
              열심히 훈련받고 있을 루카를 위해 짧게나마 응원의 메시지를 적어서
              편지를 보내 주시면 감사하겠습니다!<br /><br />
              위의 링크를 통해 정보 입력 없이 바로 편지를 작성할 수 있어요🤗<br /><br />
              💌루카에서 인편쓰는 방법💌<br />
              ❶ 아래 링크를 통해 루카의 인편함으로 간다.<br />
              ❷ 편지 쓰기 버튼을 눌러 바로 편지를 작성한다.
            </div>
          </keep-alive>
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

import ImageTemplatePng from '@/assets/images/link-image-example.png'

export default {
  setup() {
    /* Local State */
    const isShowImageTemplate = ref(true)

    /* Event Handler */
    const handleShowImageTemplate = () => (isShowImageTemplate.value = true)
    const handleShowTextTemplate = () => (isShowImageTemplate.value = false)

    return {
      /* Assets */
      ImageTemplatePng,
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
    border-radius: 7px;
    overflow: hidden;
    background-color: $white;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &__text {
      @extend .font__button-text;
      height: calc(100vw - 64px);
      padding: 32px;
      color: $gray5;
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
