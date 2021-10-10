<template>
	<div class="form-select-wrapper">
		<select class="form-select">
			<option class="form-select__placeholder-text"
					value=""
					hidden
			>입영 부대를 선택해주세요</option>
			<option v-for="division in divisions"
					:key="division.id"
					:value="division.name"
			>{{ division.name }}</option>
		</select>
	</div>
</template>
	

<script>
export default {
	setup() {
		/* Dummy Data */
		const divisions = [
			{ id: 1, name: "육군훈련소" },
			{ id: 2, name: "1사단" },
			{ id: 3, name: "2사단" },
			{ id: 4, name: "3사단" },
			{ id: 5, name: "5사단" },
			{ id: 6, name: "6사단" },
			{ id: 7, name: "7사단" },
			{ id: 8, name: "9사단" },
			{ id: 9, name: "11사단" },
			{ id: 10, name: "12사단" },
			{ id: 11, name: "15사단" },
			{ id: 12, name: "17사단" },
			{ id: 13, name: "20사단" },
			{ id: 14, name: "21사단" },
			{ id: 15, name: "22사단" },
			{ id: 16, name: "23사단" },
			{ id: 17, name: "25사단" },
			{ id: 18, name: "27사단" },
			{ id: 19, name: "28사단" },
			{ id: 20, name: "30사단" },
			{ id: 21, name: "31사단" },
			{ id: 22, name: "32사단" },
			{ id: 23, name: "35사단" },
			{ id: 24, name: "36사단" },
			{ id: 25, name: "37사단" },
			{ id: 26, name: "39사단" },
			{ id: 27, name: "50사단" },
			{ id: 28, name: "51사단" },
			{ id: 29, name: "53사단" },
			{ id: 30, name: "55사단" },
		];
		
		return {
			divisions,
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
	
.form-select {
	width: 100%;
	padding: 8px 12px;
	background-color: $gray1;
	border: none;
	border-radius: 7px;
	font-family: 'Spoqa Han Sans Neo', sans-serif;
	appearance: none;
	
	&-wrapper {
		position: relative;
		
		&::after {
			position: absolute;
			content: "▼";
		    font-size: 10px;
		    top: 9px;
		    right: 12px;
		    color: $gray3;
		}
	}
	
	&__placeholder-text {
		color: $gray3;
	}
}
</style>