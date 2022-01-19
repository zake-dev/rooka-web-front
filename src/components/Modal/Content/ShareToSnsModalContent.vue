<template>
  <div class="modal-content">
    <div class="modal-content-title">
      <span class="modal-content-title__text font__page-title">공유하기</span>
      <ModalButtonClose />
    </div>

    <div class="modal-content-body masked-overflow">
      <div class="modal-content-body-buttons">
        <ShareButtonToInstagram></ShareButtonToInstagram>
        <ShareButtonToFacebook></ShareButtonToFacebook>
        <ShareButtonToKakaotalk></ShareButtonToKakaotalk>
        <ShareButtonDownloadLinkImage></ShareButtonDownloadLinkImage>
      </div>

      <div class="modal-content-body-templates">
        <div class="modal-content-body-templates-header">
          <span class="modal-content-body-templates__label font__content-title"
            >인편함 링크</span
          >
          <ShareButtonCopyText :text="`${baseUrl}/${key}`" type="link" />
        </div>
        <div
          class="modal-content-body-templates__example modal-content-body-templates__example--narrow font__content-text"
        >
          {{ baseUrl }}/{{ key }}
        </div>
      </div>

      <div class="modal-content-body-templates">
        <div class="modal-content-body-templates-header">
          <span class="modal-content-body-templates__label font__content-title"
            >공유 템플릿</span
          >
          <ShareButtonCopyText :text="template" type="template" />
        </div>
        <div class="modal-content-body-templates__example font__content-text">
          {{ template }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { toKoreanDateString } from '@/utils/TextFormatter'

import ModalButtonClose from '@/components/Button/ModalButtonClose.vue'
import ShareButtonToInstagram from '@/components/Button/ShareButtonToInstagram.vue'
import ShareButtonToFacebook from '@/components/Button/ShareButtonToFacebook.vue'
import ShareButtonToKakaotalk from '@/components/Button/ShareButtonToKakaotalk.vue'
import ShareButtonDownloadLinkImage from '@/components/Button/ShareButtonDownloadLinkImage.vue'
import ShareButtonCopyText from '@/components/Button/ShareButtonCopyText.vue'

export default {
  components: {
    ModalButtonClose,
    ShareButtonToInstagram,
    ShareButtonToFacebook,
    ShareButtonToKakaotalk,
    ShareButtonDownloadLinkImage,
    ShareButtonCopyText,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() =>
      store.state.mailBox.key
        ? store.state.mailBox.soldier
        : store.state.registerForm.soldier,
    )
    const key = computed(
      () => store.state.mailBox.key ?? store.state.registerForm.key,
    )
    const template = computed(
      () =>
        `📮${soldier.value.name} 인편 주소 나왔어요📮\n안녕하세요 ${
          soldier.value.name
        }의 인편지기입니다!\n${soldier.value.name}가 ${toKoreanDateString(
          soldier.value.enterDate,
        )}에 공군훈련소에 입소했습니다.\n열심히 훈련받고 있을 ${
          soldier.value.name
        }를 위해 짧게나마 응원의 메시지를 적어서 편지를 보내 주시면 감사하겠습니다!\n\n아래 링크를 통해 정보 입력 없이 바로 편지를 작성할 수 있어요🤗\n\n💌루카에서 인편 쓰는 방법💌\n❶ 아래 링크를 통해 ${
          soldier.value.name
        }의 인편함으로 간다.\n❷ 편지 쓰기 버튼을 눌러 바로 편지를 작성한다.`,
    )

    /* Local State */
    const baseUrl = process.env.VUE_APP_ROOKA_URL

    return {
      /* Variables */
      key,
      soldier,
      template,
      baseUrl,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: 60vh;
  padding: 24px;
  padding-bottom: 0;

  &-title {
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      color: $gray6;
    }
  }

  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 22px;

    &-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &-templates {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      &-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
      &__label {
        color: $gray6;
      }
      &__example {
        border-radius: 7px;
        padding: 24px 16px;
        white-space: pre-line;
        background-color: $gray1;
        color: $gray5;

        &--narrow {
          padding: 8px 16px;
        }
      }
    }
  }
}
</style>
