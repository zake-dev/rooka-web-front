<template>
  <div class="page-wrapper">
    <div v-show="isMailHeaderVisible" class="mail-header">
      <div class="mail-header-row">
        <span
          class="mail-header-row__label font__content-title"
          :isvalid="validation.author"
          >보내는 사람</span
        >
        <input
          class="mail-header-row__input"
          :isvalid="validation.author"
          @focus="handleResetValidation('author')"
          placeholder="보내는 사람의 이름을 적어주세요"
          v-model="author"
        />
      </div>
      <div class="mail-header-row">
        <span
          class="mail-header-row__label font__content-title"
          :isvalid="validation.relation"
          >관계</span
        >
        <input
          class="mail-header-row__input"
          :isvalid="validation.relation"
          @focus="handleResetValidation('relation')"
          placeholder="훈련병과의 관계를 적어주세요"
          v-model="relation"
        />
      </div>
      <div class="mail-header-row">
        <span
          class="mail-header-row__label font__content-title"
          :isvalid="validation.address1"
          >주소</span
        >
        <input
          class="mail-header-row__input"
          :isvalid="validation.address1"
          :placeholder="
            isArmySoldier
              ? '답장을 받으려면 주소를 입력해주세요'
              : '답장을 받을 주소를 입력해주세요'
          "
          :value="addressInputText"
          @focus="handleResetValidation('address1')"
          @click="handleOpenDaumPostcodeApi"
          readonly
        />
      </div>
      <div v-if="addressInputText" class="mail-header-row">
        <span
          class="mail-header-row__label font__content-title"
          :isvalid="validation.address2"
          >상세주소</span
        >
        <input
          class="mail-header-row__input"
          :isvalid="validation.address2"
          @focus="handleResetValidation('address2')"
          placeholder="상세주소를 입력해주세요"
          v-model="address2"
        />
      </div>
      <div v-else class="mail-header-row">
        <span class="mail-header-row__label font__content-title"></span>
        <span
          class="mail-header-row__post-code-search font__button-text"
          @focus="handleResetValidation('address1')"
          @click="handleOpenDaumPostcodeApi"
        >
          우편번호 검색
        </span>
      </div>
    </div>

    <div class="mail-content masked-overflow">
      <div
        class="mail-content__input font__semi-title"
        :isvalid="validation.title"
        placeholder="제목을 입력해주세요"
        contenteditable
        @focus="handleResetValidation('title')"
        @click="handleCollapseMailHeader"
        @paste.prevent="handlePasteText"
        @input="handleInputTitle"
      ></div>
      <MailAttachmentContainer v-if="imageUUID" class="mail-content__image" />
      <div
        class="mail-content__textarea font__content-text"
        :isvalid="validation.content"
        placeholder="내용을 입력해주세요"
        contenteditable
        @focus="handleResetValidation('content')"
        @click="handleCollapseMailHeader"
        @paste.prevent="handlePasteText"
        @input="handleInputContent"
        ref="mailContentInput"
      ></div>
      <div class="mail-content__focus-area" @click="handleFocusContent"></div>
    </div>

    <div class="mail-footer">
      <MailFormButtonPhoto
        v-if="soldier.militaryType === 'ARMY'"
        @click="handleOpenImageUploader"
      />
      <MailFormButtonNews />
      <MailFormButtonSend />
    </div>
    <input
      v-if="soldier.militaryType === 'ARMY'"
      ref="imageInput"
      type="file"
      @input="handleUploadImage"
      hidden
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { useImageUploader } from '@/composables/useImageUploader'
import { openModal } from '@/utils/DialogHandler'

import MailAttachmentContainer from '@/components/MailAttachment/MailAttachmentContainer.vue'
import MailFormButtonPhoto from '@/components/Button/MailFormButtonPhoto.vue'
import MailFormButtonNews from '@/components/Button/MailFormButtonNews.vue'
import MailFormButtonSend from '@/components/Button/MailFormButtonSend.vue'

export default {
  components: {
    MailAttachmentContainer,
    MailFormButtonPhoto,
    MailFormButtonNews,
    MailFormButtonSend,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => store.state.mailBox.soldier)
    const isArmySoldier = computed(() => soldier.value.militaryType === 'ARMY')
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
    const imageUUID = computed(() => state.imageUUID)
    const validation = computed(() => store.state.mailForm.validation)

    /* Refs */
    const mailContentInput = ref(null)

    /* Composables */
    const { imageInput, handleOpenImageUploader, handleUploadImage } =
      useImageUploader(imageUUID =>
        store.dispatch('mailForm/UPDATE_IMAGE_UUID', imageUUID),
      )

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
    const handlePasteText = e => {
      const text = (e.originalEvent || e).clipboardData.getData('text/plain')
      document.execCommand('insertHTML', false, text)
    }
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
    const handleResetValidation = fieldName => {
      if (validation.value[fieldName] === false) {
        store.commit(`mailForm/SET_${fieldName.toUpperCase()}_VALIDATION`, true)
      }
    }

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
      imageInput,
      /* Variables */
      isMailHeaderVisible,
      soldier,
      isArmySoldier,
      author,
      relation,
      addressInputText,
      address2,
      title,
      content,
      imageUUID,
      validation,
      /* Functions */
      handleCollapseMailHeader,
      handleFocusContent,
      handlePasteText,
      handleOpenDaumPostcodeApi,
      handleInputTitle,
      handleInputContent,
      handleResetValidation,
      handleOpenImageUploader,
      handleUploadImage,
    }
  },
  beforeRouteLeave(to, from, next) {
    const isBeingSent = this.$store.state.mailForm.isBeingSent
    const isConfirmedToLeave = this.$store.state.mailForm.isConfirmedToLeave

    if (isBeingSent || isConfirmedToLeave) {
      this.$store.dispatch('mailForm/RESET')
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

      &__label {
        margin-right: 8px;
        min-width: 80px;
        color: $black;
        &[isvalid='false'] {
          color: $warningRed;
        }
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
        &[isvalid='false']::placeholder {
          color: $warningRed;
        }
      }
      &__post-code-search {
        text-decoration: underline;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
      &[isvalid='false']:empty:before {
        color: $warningRed;
      }
    }
    &__image {
      margin-bottom: 16px;
    }
    &__textarea {
      cursor: text;
      outline: none;

      &:empty:before {
        content: attr(placeholder);
        color: $gray4;
      }
      &[isvalid='false']:empty:before {
        color: $warningRed;
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
