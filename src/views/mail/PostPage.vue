<template>
  <div class="page-wrapper">
    <div v-show="isMailHeaderVisible" class="mail-header">
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
        @click="handleCollapseMailHeader"
        @paste.prevent="handlePasteText"
        @input="handleInputTitle"
      ></div>
      <div
        class="mail-content__textarea font__content-text"
        placeholder="내용을 입력해주세요"
        contenteditable
        @click="handleCollapseMailHeader"
        @paste.prevent="handlePasteText"
        @input="handleInputContent"
        ref="mailContentInput"
      ></div>
      <div class="mail-content__focus-area" @click="handleFocusContent"></div>
    </div>

    <div class="mail-footer">
      <MailButtonPhoto
        v-if="soldier.militaryType === 'ARMY'"
        @click="handleOpenUploader"
      />
      <MailButtonNews />
      <MailButtonSend />
    </div>
    <input
      ref="imageUploadInput"
      type="file"
      @input="handleUploadImage"
      hidden
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { openModal } from '@/utils/DialogHandler'
import * as FileApi from '@/api/FileApi'
import MailForm from '@/store/modules/MailForm'

import MailButtonPhoto from '@/components/Button/MailButtonPhoto.vue'
import MailButtonNews from '@/components/Button/MailButtonNews.vue'
import MailButtonSend from '@/components/Button/MailButtonSend.vue'

export default {
  components: {
    MailButtonPhoto,
    MailButtonNews,
    MailButtonSend,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => store.state.mailBox.soldier)
    store.registerModule('mailForm', MailForm)
    const state = store.state.mailForm.mail
    const author = computed({
      get: () => state.author,
      set: value => store.dispatch('mailForm/UPDATE_AUTHOR', value),
    })
    const relation = computed({
      get: () => state.relation,
      set: value => store.dispatch('mailForm/UPDATE_RELATION', value),
    })
    const addressInputText = computed(() =>
      state.address1 && state.postCode
        ? `(${state.postCode}) ${state.address1}`
        : '',
    )
    const address2 = computed({
      get: () => state.address2,
      set: value => store.dispatch('mailForm/UPDATE_ADDRESS2', value),
    })
    const title = computed({
      get: () => state.title,
      set: value => store.dispatch('mailForm/UPDATE_TITLE', value),
    })
    const content = computed({
      get: () => state.content,
      set: value => store.dispatch('mailForm/UPDATE_CONTENT', value),
    })

    /* Refs */
    const mailContentInput = ref(null)
    const imageUploadInput = ref(null)

    /* Local State */
    const isMailHeaderVisible = ref(true)

    /* Event Handler */
    const handleCollapseMailHeader = e => {
      e.target.focus()

      const isMobile =
        'ontouchstart' in document.documentElement &&
        navigator.userAgent.match(/Mobi/)
      if (isMobile) isMailHeaderVisible.value = false
    }
    const handleFocusContent = () => {
      const input = mailContentInput.value
      const selection = window.getSelection()
      const range = document.createRange()
      selection.removeAllRanges()
      range.selectNodeContents(input)
      range.collapse(false)
      selection.addRange(range)
      input.focus()
    }
    const handlePasteText = async () => {
      const text = await navigator.clipboard.readText()
      document.execCommand('insertText', false, text)
    }
    const handleOpenUploader = () => {}
    const handleUploadImage = () => {}
    const handleOpenDaumPostcodeApi = e => {
      // eslint-disable-next-line
      new daum.Postcode({
        oncomplete: data => {
          store.dispatch('mailForm/UPDATE_ADDRESS1', data.address)
          store.dispatch('mailForm/UPDATE_POST_CODE', data.zonecode)
        },
      }).open()

      e.target.blur()
    }
    const handleInputTitle = e => (title.value = e.target.innerText)
    const handleInputContent = e => (content.value = e.target.innerText)

    window.addEventListener('resize', () => {
      const MIN_KEYBOARD_HEIGHT = 300
      const isMobile =
        'ontouchstart' in document.documentElement &&
        navigator.userAgent.match(/Mobi/)
      const isKeyboardClosed =
        isMobile &&
        window.screen.height <
          window.visualViewport.height + MIN_KEYBOARD_HEIGHT
      if (isKeyboardClosed) isMailHeaderVisible.value = true
    })

    return {
      /* Refs */
      mailContentInput,
      imageUploadInput,
      /* Variables */
      isMailHeaderVisible,
      soldier,
      author,
      relation,
      addressInputText,
      address2,
      title,
      content,
      /* Functions */
      handleCollapseMailHeader,
      handleFocusContent,
      handlePasteText,
      handleOpenUploader,
      handleOpenDaumPostcodeApi,
      handleInputTitle,
      handleInputContent,
      handleOpenUploader,
      handleUploadImage,
    }
  },
  beforeRouteLeave(to, from, next) {
    const isBeingSent = this.$store.state.mailForm.isBeingSent
    const isConfirmedToLeave = this.$store.state.mailForm.isConfirmedToLeave

    if (isBeingSent || isConfirmedToLeave) {
      this.$store.unregisterModule('mailForm')
      next()
      return
    }

    this.$store.dispatch('mailForm/UPDATE_LEAVING_ROUTE', to.fullPath)
    openModal('BeforeLeavePostMail')
    next(false)
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
      cursor: text;
      margin-bottom: 16px;
      outline: none;

      &:empty:before {
        content: attr(placeholder);
        color: $gray4;
      }
    }
    &__textarea {
      cursor: text;
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
    transform: translateY($appBarHeight);
  }
}
</style>
