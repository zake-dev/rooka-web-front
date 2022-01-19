<template>
  <div class="toast-container">
    <transition-group name="list-slide-down" appear :css="true">
      <ToastCard v-for="toast in toastList" :key="toast.id" :toast="toast" />
    </transition-group>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ToastCard from '@/components/Toast/ToastCard'

export default {
  components: {
    ToastCard,
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
