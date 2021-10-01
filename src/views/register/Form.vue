<template>
	<!-- 작성 폼 (이름) -->
	<div class="form">
		<FormLabel>훈련병의 이름은<br>무엇인가요? 😮</FormLabel>
		<FormInput type="text" placeholder="이름을 입력해주세요"></FormInput>
 	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
	
import FormLabel from "@/components/Form/FormLabel.vue";
import FormInput from "@/components/Form/FormInput.vue";

export default defineComponent({
 	name: "RegisterForm",
 	components: {
		FormLabel,
		FormInput,
 	},
});
</script>

<style scoped lang="scss">
.form {
	padding: 3rem 2rem;
}
</style>