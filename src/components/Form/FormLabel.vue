<template>
	<p class="form-label font-mobile__semi-title">
		<slot></slot>
	</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "FormLabel",
});
</script>

<style scoped lang="scss">
.form-label {
	white-space: pre;
}
</style>