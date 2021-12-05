<template>
  <button class="button" @click="handleCopyText">
    <span class="font-mobile__button-text">복사하기</span>
  </button>
</template>

<script>
export default {
  props: {
    text: String
  },
  setup(props) {
    /* Event Handler */
    const handleCopyText = async () => {
      await navigator.clipboard.writeText(props.text)
      alert('텍스트가 복사되었어요👍')
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