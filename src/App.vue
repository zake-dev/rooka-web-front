<template>
  <TheLayout></TheLayout>
  <ModalContainer></ModalContainer>
  <ToastCard />
</template>

<script>
import TheLayout from '@/components/Layout/TheLayout.vue'
import ModalContainer from '@/components/Modal/ModalContainer.vue'
import ToastCard from '@/components/Toast/ToastCard.vue'

export default {
  name: 'App',
  components: {
    TheLayout,
    ModalContainer,
    ToastCard,
  },
}
</script>

<style lang="scss">
@import '@/scss/global.scss';
</style>
