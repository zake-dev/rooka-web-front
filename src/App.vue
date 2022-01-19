<template>
  <TheLayout></TheLayout>
  <ModalContainer></ModalContainer>
  <ToastContainer />
</template>

<script>
import TheLayout from '@/components/Layout/TheLayout.vue'
import ModalContainer from '@/components/Modal/ModalContainer.vue'
import ToastContainer from '@/components/Toast/ToastContainer.vue'

export default {
  name: 'App',
  components: {
    TheLayout,
    ModalContainer,
    ToastContainer,
  },
}
</script>

<style lang="scss">
@import '@/scss/global.scss';
</style>
