<template>
  <div class="page-wrapper">
    <p class="font__semi-title">
      인편함 링크가<br />생성됐어요! <Emoji>😍</Emoji>
    </p>
    <p class="font__content-text mt-3 mb-2">
      아래의 이미지를 저장하여 링크와 함께 공유해보세요!
    </p>

    <SoldierCardGenerator
      class="link-image"
      :soldier="soldier"
      :link-key="key"
    />

    <div class="action-container">
      <BaseButton class="button-gray" @click="handleShareLink">
        링크 공유하기
      </BaseButton>
      <BaseButton class="button-dark" @click="handleNewMail">
        첫 편지 쓰기
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { openModal } from '@/utils/DialogHandler'

import Emoji from '@/components/Decorator/Emoji.vue'
import SoldierCardGenerator from '@/components/SoldierCard/SoldierCardGenerator.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

/* Vuex */
const store = useStore()
const soldier = computed(() => store.state.registerForm.soldier)
const key = computed(() => store.state.registerForm.key)

/* Router */
const router = useRouter()

/* Event Handler */
const handleShareLink = () => openModal('ShareToSns')
const handleNewMail = async () => {
  await router.push(`/${key.value}/mail`)
  store.dispatch('registerForm/RESET')
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
  padding: 32px;
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
  gap: 16px;
}
</style>
