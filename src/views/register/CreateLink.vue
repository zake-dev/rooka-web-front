<template>
	<div class="page-wrapper">
		<p class="font-mobile__semi-title">
			축하합니다 🎉<br>1등으로 오셨군요!	
		</p>
		<p class="font-mobile__content-text">
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
					{{ toKoreanLocaleDateString(soldier.birthOfDate) }}
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
					{{ toKoreanLocaleDateString(soldier.enterDate) }}
				</span>
			</div>
			<div class="submitted-form__divider"></div>
		</div>
		
		<RoundedButton class="button-dark button-lg"
					   text="링크 생성하기"
	    ></RoundedButton>
		
		<a class="help-link font-mobile__caption"
		>인터넷 편지함 링크라는 게 뭔가요?</a>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
	
import RoundedButton from "@/components/Button/RoundedButton.vue";

export default defineComponent({
	name: "RegisterCreateLink",
	components: {
		RoundedButton,
	},
	setup() {
		/* Vuex */
		const store = useStore();
		const soldier = computed(() => store.state.registerForm);
		
		/* Helper Function */
		const toKoreanLocaleDateString = (dateString: string) => {
			const [year, month, day] = dateString.split('-');
			return `${year}년 ${month}월 ${day}일`;
		};
		
		return {
			/* Variables */
			soldier,
			/* Functions */
			toKoreanLocaleDateString,
		};
	},
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.help-link {
	width: fit-content;
	text-decoration: none;
	color: $gray4;
	border-bottom: 1px solid $gray4;
}
</style>