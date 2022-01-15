<template>
  <transition name="pop" appear>
    <div v-if="isVisible" class="toast-card">
      <span>
        {{ toastContent.text }}<Emoji>{{ toastContent.emoji }}</Emoji>
      </span>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Emoji from '@/components/Decorator/Emoji'

export default {
  components: {
    Emoji,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const isVisible = computed(() => store.state.isToastVisible)
    const toastContent = computed(() => store.state.toastContent)

    return {
      /* Variables */
      isVisible,
      toastContent,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.toast-card {
  position: fixed;
  z-index: 99999;
  left: 16px;
  bottom: 16px;
  height: 54px;
  width: calc(100% - 32px);
  background: $rookaYellowBright1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 16px;
}
</style>
