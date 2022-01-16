<template>
  <div
    class="toast-wrapper list-slide-down-item"
    @touchstart.prevent="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend.prevent="handleTouchEnd"
    @touchcancel.prevent="handleTouchEnd"
  >
    <div class="toast-card" :style="cardStyle">
      <span>
        {{ text }}<Emoji>{{ emoji }}</Emoji>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

import Emoji from '@/components/Decorator/Emoji'

export default {
  components: {
    Emoji,
  },
  props: {
    toastId: Number,
    text: String,
    emoji: String,
  },
  setup(props) {
    /* Vuex */
    const store = useStore()

    /* Timer */
    const removeToast = () => store.dispatch('REMOVE_TOAST', props.toastId)
    const attachTimer = () => {
      detachTimer()
      timer = setTimeout(removeToast, 3000)
    }
    const detachTimer = () => {
      if (timer) clearTimeout(timer)
    }
    let timer = null
    attachTimer()

    /* Local State */
    let isDragging = ref(false)
    let startY = null
    let offsetY = ref(0)

    /* Style */
    const opacity = computed(() =>
      Math.min(Math.max(0, 1 - offsetY.value / 48), 1),
    )
    const translateY = computed(() => {
      if (offsetY.value >= 0) return offsetY.value
      const limit = 12
      return -(limit * limit) / (offsetY.value - limit) - limit
    })
    const cardStyle = computed(() => ({
      opacity: opacity.value,
      transform: `translateY(${translateY.value}px)`,
      transition: `all ${isDragging.value ? '0' : '.3'}s ease`,
    }))

    /* Event Handler */
    const handleTouchStart = e => {
      const touch = e.targetTouches[0]
      isDragging.value = true
      startY = touch.pageY
    }
    const handleTouchMove = e => {
      const touch = e.targetTouches[0]
      if (isDragging.value) {
        offsetY.value = touch.pageY - startY
      }
    }
    const handleTouchEnd = _ => {
      isDragging.value = false
      if (offsetY.value > 32) {
        store.dispatch('REMOVE_TOAST', props.toastId)
      } else {
        startY = null
        offsetY.value = 0
      }
    }

    /* Watch */
    watch(isDragging, (val, _) => {
      if (val) detachTimer()
      else attachTimer()
    })

    return {
      /* Variables */
      cardStyle,

      /* Functions */
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.toast-wrapper {
  margin-top: 8px;
  width: 100%;
  z-index: 99999;
}

.toast-card {
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
}
</style>
