<template>
	<div class="modal-content">
		<span class="modal-content__title font-mobile__page-title">비밀번호 입력</span>
		<FormInput class="mx-1 mb-3"
				   style="width: calc(100% - 8px)"
				   type="password"
				   v-model="password"
				   placeholder="비밀번호를 입력해주세요"
	    ></FormInput>
		<div class="modal-actions mt-2">
			<RoundedButton class="button-gray"
						   text="취소"
						   @click="handleClickCloseModal"
		    ></RoundedButton>
			<RoundedButton class="button-dark"
						   text="확인"
						   @click="handleSubmitPassword"
		    ></RoundedButton>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'

import FormInput from '@/components/Form/FormInput.vue'
import RoundedButton from '@/components/Button/RoundedButton.vue'

export default {
	components: {
		FormInput,
		RoundedButton
	},
	emits: ['closeModal'],
	setup(props, { emit }) {
		/* Local State */
		const password = ref("")
		
		/* Event Handler */
		const handleClickCloseModal = () => emit('closeModal')
		const handleSubmitPassword = () => {
			alert('아직 제공되지 않는 서비스입니다.')
		}
		
		return {
			/* Variables */
			password,
			/* Functions */
			handleClickCloseModal,
			handleSubmitPassword
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	
	&__title {
		margin: 12px 0 16px 0;
		padding: 0 12px;
		color: $gray5;
	}
}
.modal-actions {
	width: 100%;
	display: inline-flex;
	justify-content: space-between;
}
</style>