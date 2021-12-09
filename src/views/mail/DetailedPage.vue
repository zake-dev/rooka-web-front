<template>
  <div class="page-wrapper">
    <div class="mail-header">
      <div class="mail-header-row">
        <span class="mail-header-row__label font__content-title me-3"
          >보내는 사람</span
        >
        <input
          class="mail-header-row__input"
          placeholder="보내는 사람의 이름을 적어주세요"
          v-model="author"
        />
      </div>
      <div class="mail-header-row">
        <span class="mail-header-row__label font__content-title me-3"
          >관계</span
        >
        <input
          class="mail-header-row__input"
          placeholder="훈련병과의 관계를 적어주세요"
          v-model="relation"
        />
      </div>
      <div class="mail-header-row">
        <span class="mail-header-row__label font__content-title me-3"
          >주소</span
        >
        <input
          class="mail-header-row__input"
          placeholder="답장을 받을 주소를 입력해주세요"
          v-model="address"
        />
      </div>
    </div>

    <div class="mail-content masked-overflow">
      <div
        class="mail-content__input font__semi-title"
        placeholder="제목을 입력해주세요"
        contenteditable
        @input="handleInputTitle"
      ></div>
      <div
        class="mail-content__textarea font__content-text"
        placeholder="내용을 입력해주세요"
        contenteditable
        @input="handleInputContent"
        ref="mailContentInput"
      ></div>
      <div class="mail-content__focus-area" @click="handleFocusContent"></div>
    </div>

    <div class="mail-footer"></div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'

export default {
  beforeRouteLeave(to, from, next) {
    const isBeingSent = this.$store.state.mail.isBeingSent
    const isConfirmedToLeave = this.$store.state.mail.isConfirmedToLeave

    if (isBeingSent || isConfirmedToLeave) {
      next()
      return
    }

    this.$store.dispatch('mail/UPDATE_LEAVING_ROUTE', to.fullPath)
    openModal('BeforeLeavePostMail')
    next(false)
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const state = store.state.mail
    const author = computed({
      get: () => state.author,
      set: value => store.dispatch('mail/UPDATE_AUTHOR', value),
    })
    const relation = computed({
      get: () => state.relation,
      set: value => store.dispatch('mail/UPDATE_RELATION', value),
    })
    const address = computed({
      get: () => state.address,
      set: value => store.dispatch('mail/UPDATE_ADDRESS', value),
    })
    const title = computed({
      get: () => state.title,
      set: value => store.dispatch('mail/UPDATE_TITLE', value),
    })
    const content = computed({
      get: () => state.content,
      set: value => store.dispatch('mail/UPDATE_CONTENT', value),
    })

    /* Refs */
    const mailContentInput = ref(null)

    /* Event Handler */
    const handleFocusContent = () => {
      mailContentInput.value.focus()
    }
    const handleInputTitle = e => (title.value = e.target.innerText)
    const handleInputContent = e => (content.value = e.target.innerText)

    onUnmounted(() => store.dispatch('mail/RESET'))

    return {
      /* Refs */
      mailContentInput,
      /* Variables */
      author,
      relation,
      address,
      title,
      content,
      /* Functions */
      handleFocusContent,
      handleInputTitle,
      handleInputContent,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
}
input {
  border: none;
}
.mail {
  &-header {
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &-row {
      display: flex;
      flex-direction: row;

      &__label {
        min-width: 57px;
      }
      &__input {
        flex: 1;
        outline: none;
        font-family: 'Spoqa Han Sans Neo', snas-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;

        &::placeholder {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-size: 12px;
          line-height: 16px;
          color: $gray3;
        }
      }
    }
  }
  &-content {
    flex: 1;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &__input {
      margin-bottom: 16px;
      outline: none;

      &:empty:before {
        content: attr(placeholder);
        color: $gray3;
      }
    }
    &__textarea {
      outline: none;

      &:empty:before {
        content: attr(placeholder);
        color: $gray3;
      }
    }
    &__focus-area {
      height: 300px;
    }
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
