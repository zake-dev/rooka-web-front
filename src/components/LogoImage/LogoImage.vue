<template>
  <img class="logo" :src="LogoPositivePng" :style="styleObject" />
</template>

<script>
import { computed } from 'vue'

import LogoPositivePng from '@/assets/images/rooka-logo-positive.png'

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
      LogoPositivePng,
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
