<template>
	<MobileLayout></MobileLayout>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import MobileLayout from "@/components/Layout/MobileLayout.vue";

export default defineComponent({
 	name: "App",
	components: {
		MobileLayout,
	},
});
</script>


<style lang="scss">
@import "@/scss/global.scss";
</style>