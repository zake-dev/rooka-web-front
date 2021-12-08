<template>
  <div class="stepper">
    <div class="progress-bar" :style="progressBarStyle"></div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    stepper: Object,
  },
  setup(props) {
    /* Local State */
    const progressBarStyle = computed(() => {
      const { maxStep, currentStep } = props.stepper
      return { width: `${(currentStep / maxStep) * 100}%` }
    })

    /* Computed Functions */
    const isCompletedStep = step => step <= props.stepper.currentStep

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
