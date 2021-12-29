<template>
  <div
    key="mainAppBar"
    class="appbar"
    :class="{ 'appbar--transparent': isErrorPage }"
  >
    <LogoImage class="mx-4 my-3" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LogoImage from '@/components/LogoImage/LogoImage.vue'

export default {
  components: {
    LogoImage,
  },
  setup() {
    /* Router */
    const route = useRoute()

    /* Local State */
    const isErrorPage = computed(() => route.path.includes('/error/'))

    return {
      isErrorPage,
    }
  },
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.appbar {
  position: fixed;
  width: 100%;
  height: $appBarHeight;
  justify-content: space-between;
  background-color: white;
  z-index: 1000;

  &--transparent {
    display: none;
  }
}
</style>
