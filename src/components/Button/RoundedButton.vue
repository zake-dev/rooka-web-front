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
	width: 147px;
	height: 42px;
	padding: 0.7rem;
	border-radius: 21px;
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