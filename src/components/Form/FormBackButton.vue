<template>
	<button class="button form-back-button">
		<i class="fas fa-chevron-left form-back-button__icon"></i>
		<span class="font-mobile__button-text">이전</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "FormBackButton",
});
</script>

<style scoped lang="scss">
.form-back-button {
	position: absolute;
	bottom: 2rem;
	left: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	
	&__icon {
		font-size: 20px;
		margin-right: 0.4rem;
	}
}
</style>