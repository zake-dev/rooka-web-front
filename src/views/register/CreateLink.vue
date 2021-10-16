<template>
	<div class="page-wrapper">
		<p class="font-mobile__semi-title">
			축하합니다 🎉<br>1등으로 오셨군요!	
		</p>
		<p class="font-mobile__content-text py-4">
			아직 아무도 김루카님의 인터넷 편지 링크를 생성하지 않았어요.<br>
			지금 누구보다 먼저 인터넷 편지함 링크를 생성해 보세요!
		</p>
		
		<!-- 입력한 폼 정보 -->
		<div class="submitted-form">
			<div class="submitted-form-row">
				<span class="font-mobile__content-title">이름</span>
				<span class="font-mobile__content-text">{{ soldier.name }}</span>
			</div>
			<div class="submitted-form__divider"></div>
			<div class="submitted-form-row">
				<span class="font-mobile__content-title">생년월일</span>
				<span class="font-mobile__content-text">
					{{ toKoreanDateString(soldier.birthOfDate) }}
				</span>
			</div>
			<div class="submitted-form__divider"></div>
			<div class="submitted-form-row">
				<span class="font-mobile__content-title">군종</span>
				<span class="font-mobile__content-text">{{ soldier.militaryType }}</span>
			</div>
			<div class="submitted-form__divider"></div>
			<div class="submitted-form-row">
				<span class="font-mobile__content-title">입대일</span>
				<span class="font-mobile__content-text">
					{{ toKoreanDateString(soldier.enterDate) }}
				</span>
			</div>
			<div class="submitted-form__divider"></div>
		</div>
		
		<div class="action-container">
			<RoundedButton class="button-dark button-lg"
					   text="링크 생성하기"
					   @click="handleClickCreateLink"
	    	></RoundedButton>
		
			<a class="action-container__help-link font-mobile__caption"
			   @click="openModal('WhatIsMailBoxLink')"
			>인터넷 편지함 링크라는 게 뭔가요?</a>
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { toKoreanDateString } from "@/utils/TextFormatter";
import { openModal } from "@/utils/DialogHandler";
	
import RoundedButton from "@/components/Button/RoundedButton.vue";

export default {
	name: "RegisterCreateLink",
	components: {
		RoundedButton,
	},
	setup() {
		/* Vuex */
		const store = useStore();
		const soldier = computed(() => store.state.registerForm);
		
		/* Router */
		const router = useRouter();
				
		/* Event Handler */
		const handleClickCreateLink = () => {
			router.push({ name: "RegisterResult" });
		};
		
		return {
			/* Variables */
			soldier,
			/* Functions */
			toKoreanDateString,
			openModal,
			handleClickCreateLink,
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
	
	&__help-link {
		margin-top: 24px;
		width: fit-content;
		text-decoration: none;
		color: $gray4;
		border-bottom: 1px solid $gray4;
	}
}
</style>