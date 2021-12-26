<template>
  <transition name="fade" appear>
    <div key="mainAppBar" v-if="!isErrorPage" class="app-bar">
      <LogoImage class="mx-4 my-3" />
    </div>
  </transition>
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

.app-bar {
  width: 100%;
  height: $appBarHeight;
  display: flex;
  justify-content: space-between;

  &__button {
    font-size: 20px;
  }
}
</style>
