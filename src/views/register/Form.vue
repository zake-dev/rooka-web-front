<template>
	<LineStepper :stepper="stepper"></LineStepper>

	<!-- 작성 폼 (이름) -->
	<div class="form">
		<FormLabel>훈련병의 이름은<br>무엇인가요? 😮</FormLabel>
		<FormInput type="text"
				   placeholder="이름을 입력해주세요"
	    		   @keyup.enter="handleSubmitName"
	    ></FormInput>
 	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
	
import SoliderModule from "@/store/modules/Soldier";
import LineStepper, { StepperState } from "@/components/Stepper/LineStepper.vue";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormInput from "@/components/Form/FormInput.vue";

export default defineComponent({
 	name: "RegisterForm",
 	components: {
		LineStepper,
		FormLabel,
		FormInput,
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
		const handleSubmitName = (event: any) => 
			store.dispatch('registerForm/updateName', event.target.value);
		
		return {
			/* Variables */ 
			soldier,
			stepper,
			/* Functions */
			handleSubmitName,
		};
	}
});
</script>

<style scoped lang="scss">
.form {
	padding: 3.5rem 2rem;
}
</style>