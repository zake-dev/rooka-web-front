<template>
  <img class="logo" :src="LogoPositiveSvg" :style="styleObject" />
</template>

<script>
import { computed } from 'vue'

import LogoPositiveSvg from '@/assets/logo-positive.svg'

export default {
  props: {
    isStamp: Boolean,
  },
  setup(props) {
    /* Style */
    const styleObject = computed(() =>
      props.isStamp
        ? { height: '56px', width: '205px' }
        : { height: '26px', width: '95px' },
    )

    return {
      LogoPositiveSvg,
      styleObject,
    }
  },
}
</script>

<style scoped lang="scss">
.logo {
  height: 26px;
  width: 95px;
}
.logo-stamp {
  height: 56px;
  width: 205px;
}
</style>
