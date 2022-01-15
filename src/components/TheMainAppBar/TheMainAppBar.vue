<template>
  <div
    key="mainAppBar"
    class="appbar"
    :class="{ 'appbar--transparent': isErrorPage }"
  >
    <button class="button mx-4 my-3" @click="handleToHome">
      <LogoImage />
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import LogoImage from '@/components/LogoImage/LogoImage.vue'

export default {
  components: {
    LogoImage,
  },
  setup() {
    /* Router */
    const router = useRouter()
    const route = useRoute()

    /* Local State */
    const isErrorPage = computed(() => route.path.includes('/error/'))

    /* Event Handler */
    const handleToHome = () => router.push('/')

    return {
      /* Variables */
      isErrorPage,
      /* Functions */
      handleToHome,
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

.button {
  height: fit-content;
  width: fit-content;
  padding: 0;
}
</style>
