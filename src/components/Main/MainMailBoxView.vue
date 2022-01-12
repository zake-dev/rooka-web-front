<template>
  <div class="view-wrapper">
    <div class="view-content">
      <span class="view-content__title">다시 꺼내 보는</span>
      <span class="view-content__title">소중한 편지들</span>
      <p class="view-content__text pt-3">
        편지는 두고두고 읽을수록 그 감동이 커지는 법.나만을 위한 rooka의
        인편함에서 소중한 인편들을 언제든지 읽어보고 관리할 수 있답니다.
      </p>
    </div>

    <div class="view-mailbox">
      <img class="view-mailbox__phone" :src="phoneSvg" />
      <img
        class="view-mailbox__mail view-mailbox__mail1"
        :src="mail1Svg"
        :style="{
          opacity: isVisible(0.4),
          right: isVisible(0.4) ? '16px' : '21.5%',
        }"
      />
      <img
        class="view-mailbox__mail view-mailbox__mail2"
        :src="mail2Svg"
        :style="{
          opacity: isVisible(0.55),
          right: isVisible(0.55) ? '16px' : '21.5%',
        }"
      />
      <img
        class="view-mailbox__mail view-mailbox__mail3"
        :src="mail3Svg"
        :style="{
          opacity: isVisible(0.7),
          right: isVisible(0.7) ? '16px' : '21.5%',
        }"
      />
      <img
        class="view-mailbox__mail view-mailbox__mail4"
        :src="mail4Svg"
        :style="{
          opacity: isVisible(0.85),
          right: isVisible(0.85) ? '16px' : '21.5%',
        }"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import imageTemplatePng from '@/assets/images/link-image-example.png'
import phoneSvg from '@/assets/images/main-mailbox-phone.svg'
import mail1Svg from '@/assets/images/main-mailbox-mail1.svg'
import mail2Svg from '@/assets/images/main-mailbox-mail2.svg'
import mail3Svg from '@/assets/images/main-mailbox-mail3.svg'
import mail4Svg from '@/assets/images/main-mailbox-mail4.svg'

export default {
  setup() {
    /* Local State */
    const viewMailboxPercentage = ref(0)

    /* Helper Function */
    const isVisible = minLimit =>
      viewMailboxPercentage.value > minLimit ? 1 : 0

    /* Event Handler */
    const handleScroll = () => {
      const $viewMailBox = document.querySelector('.view-mailbox')
      const { y, height } = $viewMailBox.getBoundingClientRect()
      viewMailboxPercentage.value = (window.innerHeight - y) / height
    }

    onMounted(() => document.body.addEventListener('scroll', handleScroll))

    return {
      /* Assets */
      imageTemplatePng,
      phoneSvg,
      mail1Svg,
      mail2Svg,
      mail3Svg,
      mail4Svg,
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
  height: auto;
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

.view-mailbox {
  flex: 1;
  padding: 32px;
  position: relative;
  min-height: 150vw;

  &__phone {
    position: absolute;
    width: 80%;
    left: 16px;
    top: 0;
  }

  &__mail {
    position: absolute;
    width: 70%;
    right: 16px;
    $baseTop: 24%;
    $gap: 15.5%;
    transition: opacity 1.2s ease, right 1.2s ease;

    &1 {
      top: $baseTop;
    }
    &2 {
      top: calc(#{$baseTop} + #{$gap});
    }
    &3 {
      top: calc(#{$baseTop} + #{$gap} * 2);
    }
    &4 {
      top: calc(#{$baseTop} + #{$gap} * 3);
    }
  }
}
</style>
