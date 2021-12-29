<template>
  <div class="stepper">
    <div class="progress-bar" :style="progressBarStyle"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    /* Vuex */
    const store = useStore()
    const stepper = computed(() => store.state.registerForm.stepper)

    /* Local State */
    const progressBarStyle = computed(() => {
      const { maxStep, currentStep } = stepper.value
      return { width: `${(currentStep / maxStep) * 100}%` }
    })

    /* Computed Functions */
    const isCompletedStep = step => step <= stepper.value.currentStep

    return {
      /* Variables */
      progressBarStyle,
      /* Functions */
      isCompletedStep,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.stepper {
  position: fixed;
  top: $appBarHeight;
  width: 100%;
  height: 2px;
  z-index: 1000;
  display: inline-block;
  background-color: $gray5;
}
.progress-bar {
  height: 2px;
  background-color: $rookaYellow;
  transition: width 0.3s ease;
}
</style>
