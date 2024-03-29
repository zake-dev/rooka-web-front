<template>
  <div class="mailbox-header">
    <div class="mailbox-header-title mb-2">
      <span class="font__title me-1">
        {{ shortenName(soldier.name) }} 훈련병
      </span>
      <SoldierInfoButton class="mb-2" @click="openModal('Profile')" />
    </div>
    <span class="font__content-text">
      {{ headerMessage }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'
import { shortenName } from '@/utils/TextFormatter'

import SoldierInfoButton from '@/components/Button/SoldierInfoButton.vue'

export default {
  components: {
    SoldierInfoButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const context = store.state.mailBox
    const soldier = computed(() => context.soldier)
    const headerMessage = computed(() => {
      const { soldier, status, mails } = context
      const totalCount = mails.length
      const pendingCount = mails.filter(
        mail => mail.status === 'PENDING',
      ).length
      const deliveredCount = mails.filter(
        mail => mail.status === 'DELIVERED',
      ).length

      switch (status) {
        case 'OPEN':
          if (totalCount === 0)
            return '아직 받은 편지가 없네요. 지금 마음을 담아 편지를 보내 보세요!'
          if (deliveredCount === 0)
            return `${pendingCount}통의 편지가 전달될 예정이에요. 지금 편지를 보내 보세요!`
          if (pendingCount === 0)
            return `${deliveredCount}통의 편지가 전달됐어요. 지금 마음을 담아 편지를 보내 보세요!`
          return `총 ${deliveredCount}통의 편지가 전달됐고, ${pendingCount}통의 편지가 전달될 예정이에요.`
        case 'CLOSED':
          return totalCount === 0
            ? `인터넷 편지가 마감되었어요. 수고 많았어요 ${soldier.name}님!`
            : `인터넷 편지가 마감되었어요. 소중한 ${deliveredCount}통의 편지 감사합니다!`
      }
      return ''
    })

    return {
      /* Varaibels */
      soldier,
      headerMessage,
      /* Functions */
      openModal,
      shortenName,
    }
  },
}
</script>

<style lang="scss" scoped>
.mailbox-header {
  grid-area: mailbox-header;
  padding: 32px 16px 0 16px;
  display: flex;
  flex-direction: column;

  &-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
