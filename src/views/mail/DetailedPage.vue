<template>
  <div class="page-wrapper">
    <div class="mail-header">
      <MailStatusChip :mail="mail" class="mb-1" />
      <div class="mail-header-row my-1">
        <span class="font__content-title"
          >{{ mail.author }} ({{ mail.relation }})</span
        >
        <span class="mail-header__text">
          {{ new Date(mail.createAt).toLocaleDateString() }}
        </span>
      </div>
      <span class="mail-header__text">
        ({{ mail.postCode }}) {{ mail.address }}
      </span>
    </div>

    <div class="mail-content masked-overflow">
      <span class="font__semi-title">{{ mail.title }}</span>
      <span class="font__content-text">{{ mail.content }}</span>
    </div>

    <div class="mail-footer">
      <MailButtonDelete />
      <MailButtonBackToMailBox />
    </div>
  </div>
</template>

<script>
import { computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'

import MailStatusChip from '@/components/Chip/MailStatusChip'
import MailButtonDelete from '@/components/Button/MailButtonDelete'
import MailButtonBackToMailBox from '@/components/Button/MailButtonBackToMailBox'

export default {
  components: {
    MailStatusChip,
    MailButtonDelete,
    MailButtonBackToMailBox,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const mail = computed(() => store.state.mailView.mail)

    /* Event Handler */
    onUnmounted(() => store.dispatch('mailView/RESET'))

    return {
      /* Variables */
      mail,
      /* Functions */
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
@import '@/scss/_variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.mail {
  &-header {
    padding: 16px 32px 0 32px;
    display: flex;
    flex-direction: column;

    &-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &__text {
      @extend .font__content-text;
      color: $gray5;
    }
  }
  &-content {
    flex: 1;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  &-footer {
    height: 56px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
