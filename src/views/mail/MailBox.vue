<template>
	<div class="page-wrapper">
    <transition name="fade" mode="out-in">
      <MailBoxSkeleton v-if="!isLoaded"></MailBoxSkeleton>

      <div v-else class="h-100 w-100">
        <MailBoxHeader></MailBoxHeader>

        <div class="mailbox">
          <div class="mailbox-list masked-overflow">
            <template v-if="mails.length === 0">
              <MailListItem v-for="index in 10" :key="index"
              ></MailListItem>
            </template>
            <template v-else>
              <MailListItem v-for="mail in mails"
                      :key="mail.id"
                      :mail="mail"
                      @click="handleClickMailListItem(mail.id)"
              ></MailListItem>
            </template>
          </div>
        </div>

        <div class="action-buttons" :class="{ 'action-buttons--closed': !isSendable }">
          <ShareButton @click="handleClickShare"></ShareButton>
          <RoundedButton v-if="isSendable"
                   class="button-dark button-md ms-2"
                   text="편지 쓰기"
                   @click="handleClickNewMail"
          ></RoundedButton>	
        </div>
      </div>
    </transition>
	</div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
  
import { openModal } from '@/utils/DialogHandler'

import MailBoxSkeleton from '@/skeletons/mail/MailBox.vue'
import MailBoxHeader from '@/components/MailBox/MailBoxHeader.vue'
import ShareButton from '@/components/Button/ShareButton.vue'
import RoundedButton from '@/components/Button/RoundedButton.vue'
import MailListItem from '@/components/MailBox/MailListItem.vue'

export default {
	components: {
    MailBoxSkeleton,
    MailBoxHeader,
		ShareButton,
		RoundedButton,
		MailListItem
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
		const handleClickMailListItem = (id) => {
			console.log(`선택된 메일: ${id}`)
			openModal('RequestPassword')
		}
		const handleClickShare = () => {
			alert('아직 제공되지 않는 서비스입니다.')
		}
		const handleClickNewMail = () => router.push(`/mail/post/${key.value}`)
    
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
			handleClickNewMail
		}
	}
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