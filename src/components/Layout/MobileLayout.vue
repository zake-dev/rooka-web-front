<template>
	<MainAppBar></MainAppBar>
	<main>
		<router-view />
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
	
import MainAppBar from "@/components/MainAppBar/MainAppBar.vue";

export default defineComponent({
 	name: "MobileLayout",
	components: {
		MainAppBar,
	}
});
</script>

<style scoped lang="scss">
main {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
</style>
