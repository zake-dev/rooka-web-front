<template>
  <div
    class="toast-wrapper list-slide-down-item"
    @touchstart.prevent="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend.prevent="handleTouchEnd"
    @touchcancel.prevent="handleTouchEnd"
  >
    <div
      class="toast-card"
      :class="cardClass"
      :style="cardStyle"
      @animationend="handleAnimationEnd"
    >
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    toast: Object,
  },
  setup(props) {
    /* Vuex */
    const store = useStore()

    /* Timer */
    let timer = null
    let resetCounter = computed(() => props.toast.resetCounter)
    const removeToast = () => store.dispatch('REMOVE_TOAST', props.toast.id)
    const attachTimer = () => {
      detachTimer()
      timer = setTimeout(removeToast, 3000)
    }
    const detachTimer = () => {
      if (timer) clearTimeout(timer)
    }
    attachTimer()

    /* Local State */
    let isDragging = ref(false)
    let isShaking = ref(false)
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
    const cardClass = computed(() => (isShaking.value ? 'shake-vertical' : ''))
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
        store.dispatch('REMOVE_TOAST', props.toast.id)
      } else {
        startY = null
        offsetY.value = 0
      }
    }
    const handleAnimationEnd = _ => {
      isShaking.value = false
    }

    /* Watch */
    watch(isDragging, (val, _) => {
      if (val) detachTimer()
      else attachTimer()
    })
    watch(resetCounter, () => {
      isShaking.value = true
      attachTimer()
    })

    return {
      /* Variables */
      cardClass,
      cardStyle,

      /* Functions */
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      handleAnimationEnd,
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
