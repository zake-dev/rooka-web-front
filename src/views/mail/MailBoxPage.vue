<template>
  <div class="page-wrapper">
    <transition name="fade" mode="out-in">
      <MailBoxSkeleton v-if="!isLoaded" />

      <div v-else class="h-100 w-100">
        <MailBoxHeader />

        <div class="mailbox">
          <div class="mailbox-list masked-overflow">
            <template v-if="mails.length === 0">
              <MailListItem v-for="index in 10" :key="index" />
            </template>
            <template v-else>
              <MailListItem
                v-for="mail in mails"
                :key="mail.id"
                :mail="mail"
                @click="handleClickMailListItem(mail.id)"
              />
            </template>
          </div>
        </div>

        <div
          class="action-buttons"
          :class="{ 'action-buttons--closed': !isSendable }"
        >
          <ShareButtonToSns @click="handleClickShare" />
          <BaseButton
            v-if="isSendable"
            class="button-primary ms-2"
            @click="handleClickNewMail"
            >편지 쓰기</BaseButton
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

import { openModal } from '@/utils/DialogHandler'

import MailBoxSkeleton from '@/skeletons/mail/MailBox.vue'
import MailBoxHeader from '@/components/MailBox/MailBoxHeader.vue'
import ShareButtonToSns from '@/components/Button/ShareButtonToSns.vue'
import BaseButton from '@/components/Button/BaseButton.vue'
import MailListItem from '@/components/MailBox/MailListItem.vue'

export default {
  components: {
    MailBoxSkeleton,
    MailBoxHeader,
    ShareButtonToSns,
    BaseButton,
    MailListItem,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const state = store.state.mailBox
    const isLoaded = computed(() => state.isLoaded)
    const isSendable = computed(() => state.state === 'OPEN')
    const key = computed(() => state.key)
    const mails = computed(() => state.mails)

    /* Router */
    const router = useRouter()
    const route = useRoute()

    /* Event Handler */
    const handleClickMailListItem = id => {
      store.dispatch('mail/UPDATE_ID', id)
      openModal('RequestPassword')
    }
    const handleClickShare = () => openModal('ShareToSns')
    const handleClickNewMail = () => router.push(`/${key.value}/mail/post`)

    onMounted(() => store.dispatch('mailBox/FETCH_CONTEXT', route.params.key))
    onUnmounted(() => store.dispatch('mailBox/RESET'))

    return {
      /* Variables */
      isLoaded,
      isSendable,
      mails,
      /* Functions */
      openModal,
      handleClickMailListItem,
      handleClickShare,
      handleClickNewMail,
    }
  },
}
</script>

<style scoped lang="scss">
.mailbox {
  width: 100%;
  height: calc(100% - 112px);
  max-height: calc(100% - 112px);
  padding: 0 16px 64px 16px;
  display: flex;
  flex-direction: column;

  &-list {
    padding-top: 8px;
  }
}
.action-buttons {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 94px;
  padding: 16px;
  display: inline-flex;
  justify-content: center;

  &--closed {
    justify-content: flex-end;
  }
}
</style>
