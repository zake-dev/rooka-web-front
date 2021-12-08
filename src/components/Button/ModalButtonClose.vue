<template>
	<button class="button close-modal-button" @click="handleCloseModal">
		<img :src="ExitButtonIconSvg" />
	</button>
</template>

<script>
import { useStore } from 'vuex'
  
import ExitButtonIconSvg from '@/assets/icons/exit-button-icon.svg'

export default {
	setup() {
    /* Vuex */
    const store = useStore()
    
    /* Event Handler */
    const handleCloseModal = () => store.dispatch('CLOSE_MODAL')
    
		return {
      /* Assets */
			ExitButtonIconSvg,
      /* Functions */
      handleCloseModal
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.close-modal-button {
	width: 23px;
  min-height: 23px;
  border-radius: 50%;
}
</style>