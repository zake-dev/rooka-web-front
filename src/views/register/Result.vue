<template>
	<div class="page-wrapper">
		<p class="font-mobile__semi-title">
			편지함 링크가<br>생성됐어요! 😍
		</p>
		<p class="font-mobile__content-text mt-2 mb-3">
			아래의 이미지를 저장하여 링크와 함께 공유해보세요!
		</p>
		
		<SoldierCard :soldier="soldier"></SoldierCard>
		
		<div class="action-container">
			<RoundedButton class="button-gray button-lg mb-3"
					 	   text="링크 공유하기"
					   	   @click="handleClickShareLink"
	    	></RoundedButton>
			<RoundedButton class="button-dark button-lg"
					  	   text="첫 편지 쓰기"
					  	   @click="handleClickNewMail"
	    	></RoundedButton>
		</div>
		
		<Modal :show="isModalVisible" @closeModal="isModalVisible = false">
			
		</Modal>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import SoldierCard from "@/components/Card/SoldierCard.vue";
import RoundedButton from "@/components/Button/RoundedButton.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
	name: "RegisterResult",
	components: {
		SoldierCard,
		RoundedButton,
		Modal,
	},
	setup() {
		/* Vuex */
		const store = useStore();
		const soldier = computed(() => store.state.registerForm);
		
		/* Local State */
		const isModalVisible = ref(false);
		
		/* Event Handler */
		const handleClickShareLink = () => {
			alert("아직 제공되지 않는 서비스입니다.");
		};
		const handleClickNewMail = () => {
			alert("아직 제공되지 않는 서비스입니다.");
		};
		
		return {
			/* Variables */
			soldier,
			isModalVisible,
			/* Functions */
			handleClickShareLink,
			handleClickNewMail,
		};
	},
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.page-wrapper {
	padding: 48px 32px;
}
.submitted-form {
	margin: 32px 0;
	
	&-row {
		padding: 16px 8px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	&__divider {
		width: 100%;
		height: 0;
		border-bottom: 1px solid $gray2;
	}
}
.action-container {
	margin-top: 24px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>