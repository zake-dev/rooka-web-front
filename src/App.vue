<template>
  <TheLayout></TheLayout>
  <ModalContainer></ModalContainer>
</template>

<script>
import TheLayout from '@/components/Layout/TheLayout.vue'
import ModalContainer from '@/components/Modal/ModalContainer.vue'

export default {
  name: 'App',
  components: {
    TheLayout,
    ModalContainer,
  },
}
</script>

<style lang="scss">
@import '@/scss/global.scss';
</style>
