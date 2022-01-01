<template>
  <div class="page-wrapper">
    <transition name="fade" mode="out-in">
      <MailBoxSkeleton v-if="!isLoaded" />

      <div v-else class="mailbox">
        <MailBoxHeader />

        <div class="h-100">
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
import { computed, onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

import { openModal } from '@/utils/DialogHandler'

import MailBoxSkeleton from '@/skeletons/mail/MailBoxSkeleton.vue'
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
    const isSendable = computed(() => state.status === 'OPEN')
    const key = computed(() => state.key)
    const mails = computed(() => state.mails)

    /* Router */
    const router = useRouter()
    const route = useRoute()

    /* Event Handler */
    const handleClickMailListItem = id => {
      store.dispatch('mailView/UPDATE_ID', id)
      openModal('RequestPassword')
    }
    const handleClickShare = () => openModal('ShareToSns')
    const handleClickNewMail = () => router.push(`/${key.value}/mail/post`)

    onBeforeMount(() => store.dispatch('mailBox/RESET'))
    onMounted(() => store.dispatch('mailBox/FETCH_CONTEXT', route.params.key))

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
@import '@/scss/_variables.scss';

.mailbox {
  padding: 0 16px 64px 16px;
  height: calc(100vh - #{$appBarHeight});
  max-height: calc(100vh - #{$appBarHeight});

  &-list {
    max-height: 100%;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
.action-buttons {
  position: fixed;
  bottom: 16px;
  width: 100%;
  height: 50px;
  padding: 0 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &--closed {
    padding: 0 16px;
    justify-content: flex-end;
  }
}
</style>
