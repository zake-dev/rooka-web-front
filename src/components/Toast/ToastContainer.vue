<template>
  <div class="toast-container">
    <transition-group name="list-slide-down" appear :css="true">
      <ToastContent
        v-for="toastContent in toastList"
        :key="toastContent.toastId"
        :toast-id="toastContent.toastId"
        :text="toastContent.text"
        :emoji="toastContent.emoji"
      />
    </transition-group>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ToastContent from '@/components/Toast/ToastContent'

export default {
  components: {
    ToastContent,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const toastList = computed(() => store.state.toastList)

    return {
      /* Variables */
      toastList,
    }
  },
}
</script>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  z-index: 99998;
  left: 16px;
  bottom: 16px;
  width: calc(100% - 32px);
}
</style>
