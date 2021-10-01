<template>
	<LineStepper :stepper="stepper"></LineStepper>

	<transition name="slide">
		<!-- 작성 폼 (이름) -->
		<div v-if="stepper.currentStep === 1" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">훈련병의 이름은<br>무엇인가요? 😮</FormLabel>
				<FormInput class="my-2"
						   type="text"
						   placeholder="이름을 입력해주세요"
						   :value="soldier.name"
						   @keyup.enter="handleSubmitName"
				></FormInput>
			</div>
		</div>

		<!-- 작성 폼 (생년월일) -->
		<div v-else-if="stepper.currentStep === 2" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">
					{{ soldier.name }} 훈련병은<br>언제 태어났나요? 🎂
				</FormLabel>
				<FormInput class="my-2"
						   type="date"
						   data-placeholder="생년월일을 입력해주세요"
						   :value="soldier.birthOfDate ? soldier.birthOfDate.toISOString().slice(0, 10) : ''"
						   @change="handleSubmitBirthOfDate"
						   required
				></FormInput>
				
				<div class="form-card-buttons my-3">
					<RoundedButton class="button-success"
								   text="다음"
								   @click="handleClickNext"
								   :disabled="soldier.birthOfDate === null"
					></RoundedButton>	
				</div>
			</div>

			<FormBackButton @click="handleClickPrevious"></FormBackButton>
		</div>
		
		<!-- 작성 폼 (군종) -->
		<div v-else-if="stepper.currentStep === 3" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">
					{{ soldier.name }} 훈련병의<br>군종은 무엇인가요? 🤔
				</FormLabel>
				
				<div class="form-card-buttons my-3">
					<RoundedButton class="button-success"
								   text="육군"
								   @click="handleClickMilitaryType('육군')"
					></RoundedButton>
					<RoundedButton class="button-info"
								   text="공군"
								   @click="handleClickMilitaryType('공군')"
					></RoundedButton>
				</div>
				
				<div class="form-card-links">
					<a class="form-card-links__help-link font-mobile__caption mt-4"
				   	   href="#"
			    	>해군/해병대는 왜 없나요?</a>
				</div>
			</div>

			<FormBackButton @click="handleClickPrevious"></FormBackButton>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
	
import SoliderModule from "@/store/modules/Soldier";
import LineStepper, { StepperState } from "@/components/Stepper/LineStepper.vue";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormInput from "@/components/Form/FormInput.vue";
import FormBackButton from "@/components/Form/FormBackButton.vue";
import RoundedButton from "@/components/Button/RoundedButton.vue";

export default defineComponent({
 	name: "RegisterForm",
 	components: {
		LineStepper,
		FormLabel,
		FormInput,
		FormBackButton,
		RoundedButton,
 	},
	setup() {
		/* Vuex */
		const store = useStore();
		if (!store.hasModule('registerForm'))
			store.registerModule('registerForm', SoliderModule);
		const soldier = computed(() => store.state.registerForm);
		
		/* Local State */
		const stepper = reactive({
			maxStep: 4,
			currentStep: 1
		} as StepperState);
		
		/* Event Handler */
		const handleSubmitName = (event: any) => {
			store.dispatch('registerForm/updateName', event.target.value);
			stepper.currentStep++;
			event.target.blur();
		};
		const handleSubmitBirthOfDate = (event: any) => {
			const date: Date = new Date(event.target.value);
			store.dispatch('registerForm/updateBirthOfDate', date);
			event.target.blur();
		};
		const handleClickMilitaryType = (militaryType: string) => {
			store.dispatch('registerForm/updateMilitaryType', militaryType);
			stepper.currentStep++;
		};
		const handleClickNext = () => {
			stepper.currentStep++;
		};
		const handleClickPrevious = () => {
			stepper.currentStep--;
		};
		
		return {
			/* Variables */ 
			soldier,
			stepper,
			/* Functions */
			handleSubmitName,
			handleSubmitBirthOfDate,
			handleClickMilitaryType,
			handleClickNext,
			handleClickPrevious,
		};
	}
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.form-card {
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 2rem;
	background-color: $white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.form-card-content {
	padding: 1.5rem 0;
}
.form-card-buttons {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.form-card-links {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	&__help-link {
		text-decoration: none;
		color: $gray4;
		border-bottom: 1px solid $gray4;
	}
}
</style>