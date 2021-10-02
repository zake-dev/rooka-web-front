<template>
	<img class="logo" :src="LogoSvg" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LogoSvg from "@/assets/images/logo.svg";

export default defineComponent({
 	name: "Logo",
	setup() {
		return {
			LogoSvg
		};
	}
});
</script>

<style scoped lang="scss">
.logo {
	height: 25.18px;
	width: 78px;
}
.logo-stamp {
	height: 10.65px;
	width: 33px;
}
</style>