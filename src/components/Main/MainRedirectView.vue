<template>
  <div class="view-wrapper">
    <div class="view-content mt-4">
      <span class="view-content__title">
        마음을 담은 인편
        <img class="view-content__comma" :src="CommaYellowSvg" />
      </span>
      <span class="view-content__title">지금 보내보세요</span>

      <div class="view-content__button">
        <BaseButton class="button-primary" @click="handleRedirectToRegister">
          편지 쓰러 가기
        </BaseButton>
      </div>
    </div>

    <div class="view-content">
      <span class="view-content__sub-title">인편함 링크가 있나요?</span>
      <FormInput
        class="view-content__input"
        placeholder="인편함 링크를 입력하세요."
        v-model="link"
      />
      <div class="view-content__button">
        <BaseButton
          class="button-secondary"
          @click="handleRedirectToMailBox"
          :disabled="link === ''"
        >
          인편함으로 가기
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CommaYellowSvg from '@/assets/icons/comma-yellow.svg'

import BaseButton from '@/components/Button/BaseButton.vue'
import FormInput from '@/components/Form/FormInput.vue'

export default {
  components: {
    BaseButton,
    FormInput,
  },
  setup() {
    /* Router */
    const router = useRouter()

    /* Local State */
    const link = ref('')

    /* Event Handler */
    const handleRedirectToRegister = () => router.push('/register/form')
    const handleRedirectToMailBox = () => {
      const [key] = link.value.split('/').slice(-1)
      router.push(`/${key}/mail`)
    }

    return {
      /* Assets */
      CommaYellowSvg,
      /* Variables*/
      link,
      /* Functions */
      handleRedirectToRegister,
      handleRedirectToMailBox,
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
  min-height: 0 !important;
  height: fit-content;
  padding-bottom: 32px;
}

.view-content {
  padding: 96px 32px 8px;
  display: flex;
  flex-direction: column;
  z-index: 0;

  &__title {
    @extend .font__title;
    color: $black;
  }

  &__sub-title {
    @extend .font__page-title;
    color: $gray5;
  }

  &__text {
    @extend .font__content-text;
    color: $gray5;
  }

  &__comma {
    transform: translate(-4px, 8px);
  }

  &__button {
    padding: 32px 40px 0;
  }

  &__input {
    background-color: $white;
    margin-top: 16px;
    box-shadow: 0px 6px 17px -1px rgba(0, 0, 0, 0.05);
  }
}
</style>
