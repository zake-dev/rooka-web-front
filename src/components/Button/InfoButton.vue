<template>
	<button class="button info-button">
		<img :src="InfoIconSvg" />
	</button>
</template>

<script>
import InfoIconSvg from '@/assets/icons/info-icon.svg'

export default {
	setup() {
		return {
			InfoIconSvg
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.info-button {
	width: 16px;
	height: 16px;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: $gray5;
}
</style>