<template>
	<div class="app-bar">
		<Logo></Logo>
		<button class="button app-bar__button">
			<i class="fas fa-bars"></i>
		</button>
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
	height: $appBarHeight;
	padding: 1rem 1.4rem;
	display: flex;
	justify-content: space-between;
	
	&__button {
		font-size: 20px;
	}
}
</style>