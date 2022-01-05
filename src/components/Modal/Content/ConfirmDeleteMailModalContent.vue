<template>
  <div class="modal-content">
    <span class="modal-content__text font__page-title mt-3 mx-2">{{
      title
    }}</span>

    <span class="modal-content__text font__button-text mx-1 my-2">{{
      content
    }}</span>

    <div class="modal-actions mt-2 mx-2">
      <BaseButton class="button-secondary" @click="handleDeleteMail"
        >삭제하기</BaseButton
      >
      <BaseButton class="button-primary" @click="closeModal">취소</BaseButton>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

import { closeModal } from '@/utils/DialogHandler'
import * as MailApi from '@/api/MailApi'

import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const mailStatus = computed(() => store.state.mailView.mail.status)

    /* Local State */
    const title = computed(() => {
      switch (mailStatus.value) {
        case 'PENDING':
          return '정말 삭제하시겠어요??'
        case 'DELIVERED':
        case 'FAILED':
          return '편지함에서 삭제하시겠어요?'
      }
      return ''
    })
    const content = computed(() => {
      switch (mailStatus.value) {
        case 'PENDING':
          return '한번 삭제한 편지는 복구할 수 없으며\n훈련병에게 전달되지 않아요.'
        case 'DELIVERED':
          return '훈련병에게 이미 전달이 완료된 편지에요.\n편지는 편지함에서만 지워집니다.'
        case 'FAILED':
          return '훈련병이 받지 못한 편지에요.\n편지는 편지함에서만 지워집니다.'
      }
      return ''
    })

    /* Router */
    const router = useRouter()
    const route = useRoute()

    /* Event Handler */
    const handleDeleteMail = async () => {
      try {
        await MailApi.deleteMail(route.params.id)
        router.push(`/${route.params.key}/mail`)
      } catch (e) {
        console.error(e)
      } finally {
        closeModal()
      }
    }

    return {
      /* Variables */
      title,
      content,
      /* Functions */
      handleDeleteMail,
      closeModal,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;

  &__text {
    color: $gray6;
    text-align: center;
    white-space: pre-line;
  }
}
.modal-actions {
  flex: 1;
  display: flex;
  justify-content: stretch;
  gap: 16px;
}
</style>
