<template>
	<MobileLayout></MobileLayout>
	<ModalContainer></ModalContainer>
</template>

<script>
import MobileLayout from '@/components/Layout/MobileLayout.vue'
import ModalContainer from '@/components/Modal/ModalContainer.vue'

export default {
 	name: 'App',
	components: {
		MobileLayout,
		ModalContainer
	}
}
</script>


<style lang="scss">
@import '@/scss/global.scss';
</style>