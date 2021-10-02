<template>
	<div class="app-bar">
		<Logo class="mx-4 my-2"></Logo>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
	
import Logo from '@/components/Logo/Logo.vue';

export default defineComponent({
 	name: "MainAppBar",
	components: {
		Logo
	}
});
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.app-bar {
	width: 100%;
	height: $appBarHeight;
	display: flex;
	justify-content: space-between;
	
	&__button {
		font-size: 20px;
	}
}
</style>