<template>
	<div class="chip px-2 py-1">
		<img class="chip__icon me-1" :src="LinkIconSvg"/>
		<span class="chip__text font-mobile__content-text">{{ link }}</span>
	</div>
</template>

<script>
import LinkIconSvg from "@/assets/images/link-icon.svg";

export default {
 	name: "LinkChip",
	props: {
		link: String,
	},
	setup() {		
		return {
			LinkIconSvg
		};
	}
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.chip {
	height: 20px;
	width: fit-content;
	border-radius: 10px;
	background-color: $gray4;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
		
	&__icon {
		width: 12px;
		height: 12px;
		color: $gray1;
	}	
	&__text {
		color: $white
	}
}
</style>