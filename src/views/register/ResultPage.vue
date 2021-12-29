<template>
  <div class="page-wrapper">
    <p class="font__semi-title">
      편지함 링크가<br />생성됐어요! <Emoji>😍</Emoji>
    </p>
    <p class="font__content-text mt-3 mb-2">
      아래의 이미지를 저장하여 링크와 함께 공유해보세요!
    </p>

    <SoldierCard class="link-image" :soldier="soldier" :link-key="key" />

    <div class="action-container">
      <BaseButton class="button-secondary mb-3" @click="handleClickShareLink"
        >링크 공유하기</BaseButton
      >
      <BaseButton class="button-primary button-lg" @click="handleClickNewMail"
        >첫 편지 쓰기</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { openModal } from '@/utils/DialogHandler'

import Emoji from '@/components/Decorator/Emoji.vue'
import SoldierCard from '@/components/Card/SoldierCard.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    Emoji,
    SoldierCard,
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => store.state.registerForm.soldier)
    const key = computed(() => store.state.registerForm.key)

    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleClickShareLink = () => openModal('ShareToSns')
    const handleClickNewMail = () => {
      router.push(`/${soldier.value.key}/mail`)
    }

    onUnmounted(() => store.dispatch('registerForm/RESET'))

    return {
      /* Variables */
      soldier,
      key,
      /* Functions */
      handleClickShareLink,
      handleClickNewMail,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
  padding: 48px 32px;
  padding-top: calc(#{$appBarHeight} + 48px);
}
.link-image {
  min-width: calc(100vw - 64px);
  min-height: calc(100vw - 64px);
}
.action-container {
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
