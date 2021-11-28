<template>
	<button class="button rounded-button">
		<span class="font-mobile__button-text">{{ text }}</span>
	</button>
</template>

<script>
export default {
	props: {
		text: String,
	}
}
</script>

<style scoped lang="scss">
.rounded-button {	
	flex: 1;
	height: 48px;
  padding: 15px 24px;
	border-radius: 24px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.button {
	&-lg {
		width: 213px !important; 
	}
	&-md {
		width: 172px !important;
		height: 50px !important;
		border-radius: 25px;
	}
}
</style>