<template>
  <div
    key="mainAppBar"
    class="appbar"
    :class="{ 'appbar--transparent': isNotFoundPage }"
  >
    <button class="button mx-4 my-3" @click="handleToHome">
      <LogoImage />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import LogoImage from '@/components/LogoImage/LogoImage.vue'

/* Router */
const router = useRouter()
const route = useRoute()

/* Local State */
const isNotFoundPage = computed(() => route.name === 'PageNotFound')

/* Event Handler */
const handleToHome = () => router.push('/')
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
