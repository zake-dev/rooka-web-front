<template>
	<button class="button button-dark share-button">
		<img :src="ShareIconSvg" class="share-button__icon" />
	</button>
</template>

<script>
import ShareIconSvg from "@/assets/images/share-icon.svg";

export default {
 	name: "ShareButton",
	setup() {
		return {
			ShareIconSvg,
		}
	}
};
</script>

<style scoped lang="scss">
.share-button {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	
	&__icon {
		width: 16px;
		height: 18px;
		margin-right: 2px;
	}
}
</style>