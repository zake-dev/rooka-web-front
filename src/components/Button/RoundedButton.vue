<template>
	<button class="button rounded-button">
		<span class="font-mobile__button-text">{{ text }}</span>
	</button>
</template>

<script>
export default {
 	name: "RoundedButton",
	props: {
		text: String,
	}
};
</script>

<style scoped lang="scss">
.rounded-button {
	$height: 42px;
	
	width: 147px;
	height: $height;
	padding: 0.7rem;
	border-radius: calc(#{$height} / 2);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.button-lg {
	width: 213px !important; 
}
</style>