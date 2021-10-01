<template>
	<LineStepper :stepper="stepper"></LineStepper>

	<div class="form-cards">
		<transition-group name="slide">
			<!-- 작성 폼 (이름) -->
			<div v-if="stepper.currentStep === 1" class="form-card">
				<FormLabel>훈련병의 이름은<br>무엇인가요? 😮</FormLabel>
				<FormInput type="text"
						   placeholder="이름을 입력해주세요"
						   @keyup.enter="handleSubmitName"
				></FormInput>
			</div>

			<!-- 작성 폼 (생년월일) -->
			<div v-else-if="stepper.currentStep === 2" class="form-card">
				<FormLabel>{{ soldier.name }} 훈련병은<br>언제 태어났나요? 🎂</FormLabel>
				<FormInput type="text"
						   placeholder="생년월일을 입력해주세요"
						   @keyup.enter="handleSubmitBirthOfDate"
				></FormInput>
				<FormBackButton @click="handleClickGoBack"></FormBackButton>
			</div>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
	
import SoliderModule from "@/store/modules/Soldier";
import LineStepper, { StepperState } from "@/components/Stepper/LineStepper.vue";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormInput from "@/components/Form/FormInput.vue";
import FormBackButton from "@/components/Form/FormBackButton.vue";

export default defineComponent({
 	name: "RegisterForm",
 	components: {
		LineStepper,
		FormLabel,
		FormInput,
		FormBackButton,
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
		};
		const handleSubmitBirthOfDate = (event: any) => {
			console.dir(event.target.value);
		};
		const handleClickGoBack = () => {
			stepper.currentStep--;
		};
		
		return {
			/* Variables */ 
			soldier,
			stepper,
			/* Functions */
			handleSubmitName,
			handleSubmitBirthOfDate,
			handleClickGoBack,
		};
	}
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.form-cards {
	height: 100%;
	display: flex;
	flex-direction: row;
}
.form-card {
	position: absolute;
	width: 100vw;
	height: 100%;
	padding: 3.5rem 2rem;
	background-color: $white;
}
</style>