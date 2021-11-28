<template>
	<transition name="fade">
		<div v-if="isVisible" class="modal-wrapper">
			<div class="modal__dismiss-area"
				 @click="handleCloseModal"
			></div>

			<transition name="pop" appear>
				<div class="modal-card">
					<Component :is="ModalContent"></Component>	
				</div>
			</transition>
		</div>
	</transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import MissingMilitaryTypeModalContent from '@/components/Modal/Content/MissingMilitaryTypeModalContent.vue'
import WhatIsMailBoxLinkModalContent from '@/components/Modal/Content/WhatIsMailBoxLinkModalContent.vue'
import ProfileModalContent from '@/components/Modal/Content/ProfileModalContent.vue'
import RequestPasswordModalContent from '@/components/Modal/Content/RequestPasswordModalContent.vue'
import SetPasswordModalContent from '@/components/Modal/Content/SetPasswordModalContent.vue'
import BeforeLeavePostMailModalContent from '@/components/Modal/Content/BeforeLeavePostMailModalContent.vue'
import ShareToSnsModalContent from '@/components/Modal/Content/ShareToSnsModalContent.vue'
	
export default {
	components: {
		MissingMilitaryTypeModalContent,
		WhatIsMailBoxLinkModalContent,
		ProfileModalContent,
		RequestPasswordModalContent,
    SetPasswordModalContent,
    BeforeLeavePostMailModalContent,
    ShareToSnsModalContent
	},
	setup() {
		/* Vuex */
		const store = useStore();
		const isVisible  = computed(() => store.state.isModalVisible)
		const ModalContent = computed(() => store.state.modalContentName + "ModalContent")
		
		/* Event Handler */
		const handleCloseModal = () => store.dispatch('CLOSE_MODAL')
		
		return {
			/* Components */
			ModalContent,
			/* Variables */
			isVisible,
			/* Functions */
			handleCloseModal
		}
	},
}
</script>

<style scoped lang="scss">
.modal-wrapper {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9997;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal__dismiss-area {
	position: absolute;
	z-index: 9998;
	height: 100%;
	width: 100%;
	background-color: #00000070;
	backdrop-filter: blur(2px);
}
.modal-card {
	position: absolute;
	z-index: 9999;
	height: auto;
	width: calc(100% - 32px);
	background: #FFFFFF;
	box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
	border-radius: 7px;
  display: flex;
  justify-content: center;
}
</style>