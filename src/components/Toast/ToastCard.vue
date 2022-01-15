<template>
  <div class="toast-wrapper">
    <transition-group name="list-slide-down" appear>
      <div
        v-for="toastContent in toastList"
        :key="toastContent.toastId"
        class="toast-card list-slide-down-item"
      >
        <span>
          {{ toastContent.text }}<Emoji>{{ toastContent.emoji }}</Emoji>
        </span>
      </div>
    </transition-group>
  </div>
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
    const toastList = computed(() => store.state.toastList)

    return {
      /* Variables */
      toastList,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.toast-wrapper {
  position: fixed;
  z-index: 99998;
  left: 16px;
  bottom: 16px;
  width: calc(100% - 32px);
}

.toast-card {
  z-index: 99999;
  height: 54px;
  width: 100%;
  background: $rookaYellowBright1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 16px;
  margin-top: 8px;
}
</style>
