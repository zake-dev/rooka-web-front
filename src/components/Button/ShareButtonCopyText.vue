<template>
  <button class="button" @click="handleCopyText">
    <span class="font-mobile__button-text">복사하기</span>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    type: String
  },
  setup(props) {
    /* Local State */
    const toastMessage = (() => {
      switch(props.type) {
        case 'link': return '인편함 링크가 복사되었어요👍'
        case 'template': return '공유 템플릿이 복사되었어요👍'
      }
    })()
    
    /* Event Handler */
    const handleCopyText = async () => {
      await navigator.clipboard.writeText(props.text)
      alert(toastMessage)
    }
    
    return {
      /* Functions */
      handleCopyText
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.button {
  color: $rookaYellow;
}
</style>