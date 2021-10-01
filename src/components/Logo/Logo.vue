<template>
	<div class="logo">
		<span class="logo__text">r</span>
		<div class="logo__circle logo__circle--red"></div>
		<div class="logo__circle logo__circle--blue"></div>
		<span class="logo__text">ka</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "Logo",
});
</script>

<style lang="scss">
@import  "@/scss/_variables.scss";

.logo {
	display: flex;
	align-items: flex-end;
	
	&__text {
		font-family: "Lane - Narrow", sans-serif;
		font-size: 30px;
		font-weight: bold;
		line-height: 36px;
		color: $black;
	}
	&__circle {
		margin: 6px 1px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		
		&--red {
			background-color: $rookaRed;
		}
		&--blue {
			background-color: $rookaBlue;
		}
	}
}
</style>