<template>
  <TheMainAppBar />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import TheMainAppBar from '@/components/TheMainAppBar/TheMainAppBar.vue'

export default {
  components: {
    TheMainAppBar,
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables';

main {
  height: 100%;
  padding-top: $appBarHeight;
}
</style>
