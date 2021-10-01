<template>
	<button class="button rounded-button">
		<span class="font-mobile__button-text">{{ text }}</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "RoundedButton",
	props: {
		text: String,
	}
});
</script>

<style scoped lang="scss">
.rounded-button {
	width: 147px;
	padding: 0.7rem;
	border-radius: 25px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.button-lg {
	width: 213px !important; 
}
</style>