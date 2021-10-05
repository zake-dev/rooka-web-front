<template>
	<input class="form-input" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "FormInput",
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
	
.form-input {
	width: 100%;
	padding: 8px 12px;
	background-color: $gray1;
	border: none;
	border-radius: 7px;
	font-family: 'Spoqa Han Sans Neo', sans-serif;

	&::placeholder {
		font-weight: 300;
		font-size: 12px;
		line-height: 16px;
	}
}
</style>