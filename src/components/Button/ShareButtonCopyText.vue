<template>
  <button class="button" @click="handleCopyText">
    <span class="button__text font__button-text">복사하기</span>
  </button>
</template>

<script>
import { copyTextOf } from '@/utils/ClipboardUtil'
import { showToast } from '@/utils/ToastHandler'

export default {
  props: {
    text: String,
    type: String,
  },
  setup(props) {
    /* Local State */
    const toastMessage = (() => {
      switch (props.type) {
        case 'link':
          return '인편함 링크가 복사되었어요👍'
        case 'template':
          return '공유 템플릿이 복사되었어요👍'
      }
    })()

    /* Event Handler */
    const handleCopyText = () => {
      copyTextOf(props.text)
      showToast(toastMessage)
    }

    return {
      /* Functions */
      handleCopyText,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.button {
  &__text {
    color: $rookaYellow;
  }
}
</style>
