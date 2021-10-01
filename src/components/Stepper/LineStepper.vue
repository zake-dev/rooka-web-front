<template>
	<div class="stepper">
		<div v-for="step in stepper.maxStep"
			 :key="step"
			 class="stepper__step"
			 :class="{ 'stepper__step--complete': isCompletedStep(step) }"
		></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
	
export interface StepperState {
	maxStep: number,
	currentStep: number,
}

export default defineComponent({
 	name: "LineStepper",
	props: {
		stepper: {
			type: Object as PropType<StepperState>,
			required: true,
		},
	},
	setup(props) {
		const isCompletedStep = (step: number) => (step <= props.stepper.currentStep);
		
		return {
			isCompletedStep
		};
	}
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.stepper {
	width: 100%;
	height: 1px;
	display: flex;
	flex-direction: row;
	
	&__step {
		width: 100%;
		height: 1px;
		border: none;
		
		&--complete {
			border-bottom: 1px solid $black;
		}
	}
}
</style>