<template>
	<div class="form">
		<p class="form__label">훈련병의 이름은<br>무엇인가요? 😮</p>
		<input class="form__input" type="text" placeholder="이름을 입력해주세요" />
 	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "RegisterForm",
 	components: {
 	},
});
</script>

<style scoped lang="scss">
.form {
	padding: 3rem 2rem;
	
	&__label {
		line-break: pre;
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 31px;
		letter-spacing: -0.02em;
	}
}
</style>