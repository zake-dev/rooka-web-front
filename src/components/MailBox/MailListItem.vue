<template>
	<div class="list-item">
		<div v-if="mail">
			
		</div>
	</div>
</template>

<script>
export default {
	components: {
		
	},
	props: {
		mail: Object,
	},
	setup(props) {
		
	}
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.list-item {
	width: 100%;
	height: 94px;
	margin-top: 16px;
	background-color: $gray1;
	border-radius: 7px;
	box-shadow: 0px 6px 17px -1px #0000000D;
}
</style>