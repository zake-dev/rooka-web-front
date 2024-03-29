<template>
  <div class="page-wrapper">
    <div v-show="isMailHeaderVisible" ref="mailHeader" class="mail-header">
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
          placeholder="보내는 사람의 이름을 적어 주세요"
          maxlength="15"
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
          placeholder="훈련병과의 관계를 적어 주세요"
          maxlength="10"
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
              ? '답장을 받으려면 주소를 입력해 주세요'
              : '답장을 받을 주소를 입력해 주세요'
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
          placeholder="상세주소를 입력해 주세요"
          maxlength="44"
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
        placeholder="제목을 입력해 주세요"
        contenteditable
        @focus=";[handleFocusInput(), handleResetValidation('title')]"
        @click="handleCollapseMailHeader"
        @paste.prevent="handlePasteText"
        @input="handleInputTitle"
        ref="mailTitleInput"
      ></div>
      <MailAttachmentContainer v-if="imageUUID" class="mail-content__image" />
      <div
        class="mail-content__textarea font__content-text"
        :isvalid="validation.content"
        placeholder="내용을 입력해 주세요"
        contenteditable
        @focus=";[handleFocusInput(), handleResetValidation('content')]"
        @paste.prevent="handlePasteText"
        @input="handleInputContent"
        ref="mailContentInput"
      ></div>
      <div
        class="mail-content__length font__caption"
        :isvalid="content.length <= maxContentLength"
      >
        ({{ toCommaNumber(content.length) }}/{{
          toCommaNumber(maxContentLength)
        }})
      </div>
      <div class="mail-content__focus-area" @click="handleFocusContent"></div>
    </div>

    <div
      class="mail-footer"
      :style="{ 'justify-content': isArmySoldier ? 'space-between' : 'end' }"
    >
      <MailFormButtonPhoto
        v-if="isArmySoldier"
        @click="handleOpenImageUploader"
      />
      <MailFormButtonSend />
    </div>

    <input
      v-if="isArmySoldier"
      ref="imageInput"
      type="file"
      @input="handleUploadImage"
      hidden
    />

    <RoundSpinnerWithBlur v-if="isBeingSent" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { useImageUploader } from '@/composables/useImageUploader'
import { openModal } from '@/utils/DialogHandler'
import { toCommaNumber } from '@/utils/TextFormatter'

import MailAttachmentContainer from '@/components/MailAttachment/MailAttachmentContainer.vue'
import MailFormButtonPhoto from '@/components/Button/MailFormButtonPhoto.vue'
import MailFormButtonSend from '@/components/Button/MailFormButtonSend.vue'
import RoundSpinnerWithBlur from '@/components/Spinner/RoundSpinnerWithBlur.vue'

export default {
  components: {
    MailAttachmentContainer,
    MailFormButtonPhoto,
    MailFormButtonSend,
    RoundSpinnerWithBlur,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => store.state.mailBox.soldier)
    const isArmySoldier = computed(() => soldier.value.militaryType === 'ARMY')
    const mail = store.state.mailForm.mail
    const author = computed({
      get: () => mail.author,
      set: value => store.dispatch('mailForm/UPDATE_AUTHOR', value),
    })
    const relation = computed({
      get: () => mail.relation,
      set: value => store.dispatch('mailForm/UPDATE_RELATION', value),
    })
    const addressInputText = computed(() =>
      mail.address1 && mail.postCode
        ? `(${mail.postCode}) ${mail.address1}`
        : '',
    )
    const address2 = computed({
      get: () => mail.address2,
      set: value => store.dispatch('mailForm/UPDATE_ADDRESS2', value),
    })
    const title = computed({
      get: () => mail.title,
      set: value => store.dispatch('mailForm/UPDATE_TITLE', value),
    })
    const content = computed({
      get: () => mail.content,
      set: value => store.dispatch('mailForm/UPDATE_CONTENT', value),
    })
    const imageUUID = computed(() => mail.imageUUID)
    const validation = computed(() => store.state.mailForm.validation)
    const maxContentLength = store.getters['mailForm/maxContentLength']
    const isBeingSent = computed(() => store.state.mailForm.isBeingSent)

    /* Refs */
    const mailHeader = ref(null)
    const mailTitleInput = ref(null)
    const mailContentInput = ref(null)

    /* Composables */
    const { imageInput, handleOpenImageUploader, handleUploadImage } =
      useImageUploader(imageUUID =>
        store.dispatch('mailForm/UPDATE_IMAGE_UUID', imageUUID),
      )

    /* Local State */
    const isMailHeaderVisible = ref(true)

    /* Event Handler */
    const handleFocusInput = () => checkCollapseMailHeader()
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
    const handleInputTitle = e => {
      title.value = e.target.innerText
      limitTitleLength()
    }
    const handleInputContent = e => (content.value = e.target.innerText)
    const handleResetValidation = fieldName =>
      store.dispatch('mailForm/RESET_VALIDATION', fieldName)
    const limitTitleLength = () => {
      const selection = window.getSelection()
      const offset = selection.anchorOffset
      const length = mailTitleInput.value.innerText.length
      if (length > 80) {
        selection.extend(
          mailTitleInput.value.childNodes[0],
          Math.min(length, offset - (length - 80)),
        )
        setTimeout(() => {
          selection.deleteFromDocument()
          title.value = mailTitleInput.value.innerText
        }, 0)
      }
    }

    /* Helper Function */
    const isMobileKeyboardOpened = () => {
      const MIN_KEYBOARD_HEIGHT = 300
      const isMobile =
        'ontouchstart' in document.documentElement &&
        navigator.userAgent.match(/Mobi/)
      const isKeyboardOpened =
        isMobile &&
        window.screen.height >=
          window.visualViewport.height + MIN_KEYBOARD_HEIGHT
      return isMobile && isKeyboardOpened
    }
    const checkCollapseMailHeader = () => {
      if (isMailHeaderVisible.value) {
        const isFocusInHeader = mailHeader.value.contains(
          document.activeElement,
        )
        if (isMobileKeyboardOpened() && !isFocusInHeader)
          isMailHeaderVisible.value = false
      } else {
        if (!isMobileKeyboardOpened()) isMailHeaderVisible.value = true
      }
    }

    window.addEventListener('resize', () => {
      checkCollapseMailHeader()
    })

    return {
      /* Refs */
      mailHeader,
      mailTitleInput,
      mailContentInput,
      imageInput,
      /* Variables */
      maxContentLength,
      isMailHeaderVisible,
      soldier,
      author,
      relation,
      addressInputText,
      address2,
      title,
      content,
      imageUUID,
      validation,
      isArmySoldier,
      isBeingSent,
      /* Functions */
      handleFocusInput,
      handleFocusContent,
      handlePasteText,
      handleOpenDaumPostcodeApi,
      handleInputTitle,
      handleInputContent,
      handleResetValidation,
      handleOpenImageUploader,
      handleUploadImage,
      toCommaNumber,
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
    &__length {
      color: $gray4;
      align-self: flex-end;
      margin-top: 16px;
      &[isvalid='false'] {
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
