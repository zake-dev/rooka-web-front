<template>
	<button class="button icon-button">
		<span class="font-mobile__button-text">
			<i class="icon-button__icon" :class="fontAwesomeIcon"></i>
		</span>
	</button>
</template>

<script>
export default {
 	name: "IconButton",
	props: {
		fontAwesomeIcon: String,
	}
};
</script>

<style scoped lang="scss">
.icon-button {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	
	&__icon {
		font-size: 18px;
	}
}
</style>