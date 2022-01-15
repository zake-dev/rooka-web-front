<template>
  <button class="button button-primary" @click="handleToRegister">
    편지 쓰러 가기
  </button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    isVisible: Boolean,
  },
  setup(props) {
    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleToRegister = () => {
      if (!props.isVisible) return
      router.push('/register')
    }

    return {
      handleToRegister,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.button {
  @extend .font__tag;
  height: 24px;
  padding: 4px 12.5px;
  color: $gray1;
  border-radius: 12px;
}
</style>
