<template>
  <div class="view-wrapper">
    <div class="view-content">
      <span class="view-content__title">링크 하나로</span>
      <span class="view-content__title">간편해지는 인편</span>
      <p class="view-content__text pt-3">
        회원가입부터 각종 정보 입력까지……. 편지 하나 쓰기 정말 힘들죠?
        rooka에서는 매번 이런 귀찮은 과정을 거칠 필요 없이 인편함 링크를 통해
        바로 인편을 작성할 수 있답니다!
      </p>
    </div>

    <div class="view-animations">
      <div
        class="view-animations-row__chip mb-3"
        :style="{ opacity: isVisible(0.3) }"
      >
        이름
      </div>
      <div
        class="view-animations-row__chip mb-3"
        :style="{ opacity: isVisible(0.4) }"
      >
        기수
      </div>
      <div
        class="view-animations-row__chip mb-3"
        :style="{ opacity: isVisible(0.5) }"
      >
        생년월일
      </div>
      <div
        class="view-animations-row__chip mb-3"
        :style="{ opacity: isVisible(0.6) }"
      >
        입영일
      </div>
      <img
        class="view-animations__ellipsis mb-2"
        :src="MainIntroductionEllipsisPng"
        :style="{ opacity: isVisible(0.7) }"
      />
      <img
        class="view-animations__arrow mb-2"
        :src="MainIntroductionArrowPng"
        :style="{ opacity: isVisible(0.8) }"
      />
      <MainIntorductionViewLinkChip
        class="view-animations__link-chip"
        :style="{
          opacity: isVisible(0.9),
          transform: isVisible(0.9) ? 'translateY(0)' : 'translateY(-24px)',
        }"
      >
        김루카.12345
      </MainIntorductionViewLinkChip>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

import MainIntroductionEllipsisPng from '@/assets/images/main-introduction-ellipsis.png'
import MainIntroductionArrowPng from '@/assets/images/main-introduction-arrow.png'
import MainIntorductionViewLinkChip from './MainIntroductionViewLinkChip.vue'

export default {
  components: {
    MainIntorductionViewLinkChip,
  },
  setup() {
    /* Local State */
    const viewAnimationsPercentage = ref(0)

    /* Helper Function */
    const isVisible = minLimit =>
      viewAnimationsPercentage.value > minLimit ? 1 : 0

    /* Event Handler */
    const handleScroll = () => {
      const $viewAnimations = document.querySelector('.view-animations')
      const { y, height } = $viewAnimations.getBoundingClientRect()
      viewAnimationsPercentage.value = (window.innerHeight - y) / height
    }

    onMounted(() => document.body.addEventListener('scroll', handleScroll))
    onBeforeRouteLeave(() =>
      document.body.removeEventListener('scroll', handleScroll),
    )

    return {
      /* Assets */
      MainIntroductionEllipsisPng,
      MainIntroductionArrowPng,
      /* Functions */
      isVisible,
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
  padding: 32px;
  padding-top: 80px;
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

.view-animations {
  flex: 1;
  padding: 16px 32px 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    &__chip {
      @extend .font__caption;
      font-size: 14px;
      padding: 6px 14px;
      background-color: $white;
      color: $gray3;
      border-radius: 20px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      transition: opacity 0.3s ease;
    }
  }

  &__ellipsis {
    width: 8px;
    height: 24px;
    transition: opacity 0.3s ease;
  }

  &__arrow {
    transition: opacity 0.3s ease;
  }

  &__link-chip {
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
}
</style>
