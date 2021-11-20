<template>
	<img class="logo" :src="LogoSvg" />
</template>

<script>
import LogoSvg from '@/assets/rooka-logo.svg'

export default {
	setup() {
		return {
			LogoSvg
		}
	}
}
</script>

<style scoped lang="scss">
.logo {
	height: 25px;
	width: 95px;
}
.logo-stamp {
	height: 17px;
	width: 64px;
}
</style>