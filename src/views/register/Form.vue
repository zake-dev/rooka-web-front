<template>
	<LineStepper :stepper="stepper"></LineStepper>

	<transition name="slide">
		<!-- 작성 폼 (이름) -->
		<div v-if="stepper.currentStep === 1" class="form-card">
			<div class="form-card-content">
				<FormLabel>훈련병의 이름은<br>무엇인가요? 😮</FormLabel>
				<FormInput type="text"
						   placeholder="이름을 입력해주세요"
						   @keyup.enter="handleSubmitName"
				></FormInput>
			</div>
		</div>

		<!-- 작성 폼 (생년월일) -->
		<div v-else-if="stepper.currentStep === 2" class="form-card">
			<div class="form-card-content">
				<FormLabel>
					{{ soldier.name }} 훈련병은<br>언제 태어났나요? 🎂
				</FormLabel>
				<FormInput type="text"
						   placeholder="생년월일을 입력해주세요"
						   @keyup.enter="handleSubmitBirthOfDate"
				></FormInput>	
			</div>

			<FormBackButton @click="handleClickGoBack"></FormBackButton>
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
			event.target.blur();
		};
		const handleSubmitBirthOfDate = (event: any) => {
			console.dir(event.target.value);
			event.target.blur();
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
</style>