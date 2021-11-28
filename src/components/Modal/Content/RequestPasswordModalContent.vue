<template>
	<div class="modal-content">
		<span class="modal-content__title font-mobile__page-title">비밀번호 입력</span>
		<FormInput class="mx-2 mb-3"
				   type="password"
				   v-model="password"
				   placeholder="비밀번호를 입력해주세요"
	    ></FormInput>
		<div class="modal-actions mt-2 mx-1">
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
import { useStore } from 'vuex'

import * as MailApi from '@/api/MailApi'
  
import FormInput from '@/components/Form/FormInput.vue'
import RoundedButton from '@/components/Button/RoundedButton.vue'

export default {
	components: {
		FormInput,
		RoundedButton
	},
	setup(props) {
    /* Vuex */
    const store = useStore()
    
		/* Local State */
		const password = ref('')
		
		/* Event Handler */
		const handleClickCloseModal = () => store.dispatch('CLOSE_MODAL')
		const handleSubmitPassword = async () => {
      await store.dispatch('mail/FETCH_MAIL', password.value)
      console.dir(store.state.mail.mail)
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
  width: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 16px;
	
	&__title {
		margin: 16px 0;
		padding: 0 16px;
		color: $gray5;
	}
}
.modal-actions {
  flex: 1;
	display: flex;
	justify-content: stretch;
  gap: 8px;
}
.button {
  width: 100%;
  min-width: 147px;
}
</style>