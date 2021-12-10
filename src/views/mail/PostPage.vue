<template>
  <div class="page-wrapper">
    <div class="mail-header">
      <div class="mail-header-row">
        <span class="mail-header-row__label font__content-title"
          >보내는 사람</span
        >
        <input
          class="mail-header-row__input"
          placeholder="보내는 사람의 이름을 적어주세요"
          v-model="author"
        />
      </div>
      <div class="mail-header-row">
        <span class="mail-header-row__label font__content-title">관계</span>
        <input
          class="mail-header-row__input"
          placeholder="훈련병과의 관계를 적어주세요"
          v-model="relation"
        />
      </div>
      <div class="mail-header-row">
        <span class="mail-header-row__label font__content-title">주소</span>
        <div class="mail-header-row-address">
          <input
            class="mail-header-row__input"
            placeholder="답장을 받을 주소를 입력해주세요"
            :value="addressInputText"
            @click="handleOpenDaumPostcodeApi"
            readonly
          />
          <input
            class="mail-header-row__input"
            placeholder="상세주소를 입력해주세요"
            v-model="address2"
          />
          <a class="mail-header-row__link" @click="handleOpenDaumPostcodeApi"
            >우편번호 검색</a
          >
        </div>
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

    <div class="mail-footer">
      <MailButtonPhoto v-if="soldier.militaryType === 'ARMY'" />
      <MailButtonNews />
      <MailButtonSend />
    </div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'

import MailButtonPhoto from '@/components/Button/MailButtonPhoto.vue'
import MailButtonNews from '@/components/Button/MailButtonNews.vue'
import MailButtonSend from '@/components/Button/MailButtonSend.vue'

export default {
  components: {
    MailButtonPhoto,
    MailButtonNews,
    MailButtonSend,
  },
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
    const soldier = computed(() => store.state.mailBox.soldier)
    const state = store.state.mail.mail
    const author = computed({
      get: () => state.author,
      set: value => store.dispatch('mail/UPDATE_AUTHOR', value),
    })
    const relation = computed({
      get: () => state.relation,
      set: value => store.dispatch('mail/UPDATE_RELATION', value),
    })
    const addressInputText = computed(() =>
      state.address1 && state.postCode
        ? `(${state.postCode}) ${state.address1}`
        : '',
    )
    const address2 = computed({
      get: () => state.address2,
      set: value => store.dispatch('mail/UPDATE_ADDRESS2', value),
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
    const handleOpenDaumPostcodeApi = e => {
      // eslint-disable-next-line
      new daum.Postcode({
        oncomplete: data => {
          store.dispatch('mail/UPDATE_ADDRESS1', data.address)
          store.dispatch('mail/UPDATE_POST_CODE', data.zonecode)
        },
      }).open()

      e.target.blur()
    }
    const handleInputTitle = e => (title.value = e.target.innerText)
    const handleInputContent = e => (content.value = e.target.innerText)

    onUnmounted(() => store.dispatch('mail/RESET'))

    return {
      /* Refs */
      mailContentInput,
      /* Variables */
      soldier,
      author,
      relation,
      addressInputText,
      address2,
      title,
      content,
      /* Functions */
      handleFocusContent,
      handleOpenDaumPostcodeApi,
      handleInputTitle,
      handleInputContent,
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
}
input {
  border: none;
}
.mail {
  &-header {
    padding: 8px 32px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-row {
      display: flex;
      flex-direction: row;

      &-address {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
      }
      &__link {
        @extend .font__button-text;
        text-decoration: underline;
        text-decoration-color: $gray6;
        color: $gray6;
      }
      &__label {
        margin-right: 8px;
        min-width: 80px;
        color: $black;
      }
      &__input {
        @extend .font__content-text;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        color: $gray6;
        flex: 1;
        outline: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &::placeholder {
          @extend .font__content-text;
          color: $gray4;
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
        color: $gray4;
      }
    }
    &__textarea {
      outline: none;

      &:empty:before {
        content: attr(placeholder);
        color: $gray4;
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
