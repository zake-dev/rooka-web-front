<template>
	<img class="logo" :src="LogoSvg" />
</template>

<script>
import LogoSvg from "@/assets/images/logo.svg";

export default {
 	name: "Logo",
	setup() {
		return {
			LogoSvg
		};
	}
};
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