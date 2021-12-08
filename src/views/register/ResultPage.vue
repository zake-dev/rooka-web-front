<template>
  <div class="page-wrapper">
    <p class="font-mobile__semi-title">
      편지함 링크가<br />생성됐어요! <Emoji>😍</Emoji>
    </p>
    <p class="font-mobile__content-text mt-2 mb-3">
      아래의 이미지를 저장하여 링크와 함께 공유해보세요!
    </p>

    <SoldierCard class="link-image" :soldier="soldier"></SoldierCard>

    <div class="action-container">
      <RoundedButton
        class="button-gray button-lg mb-3"
        text="링크 공유하기"
        @click="handleClickShareLink"
      ></RoundedButton>
      <RoundedButton
        class="button-dark button-lg"
        text="첫 편지 쓰기"
        @click="handleClickNewMail"
      ></RoundedButton>
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
import RoundedButton from '@/components/Button/RoundedButton.vue'

export default {
  components: {
    Emoji,
    SoldierCard,
    RoundedButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => store.state.registerForm)

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
}
.link-image {
  min-width: calc(100vw - 64px);
  min-height: calc(100vw - 64px);
}
.action-container {
  margin-top: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
