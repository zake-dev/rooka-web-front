<template>
	<MainAppBar></MainAppBar>
	<main>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</main>
</template>

<script>	
import MainAppBar from "@/components/MainAppBar/MainAppBar.vue";

export default {
 	name: "MobileLayout",
	components: {
		MainAppBar,
	},
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

main {
	height: calc(100% - #{$appBarHeight});
}
</style>
