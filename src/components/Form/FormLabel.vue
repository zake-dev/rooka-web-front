<template>
<p class="form-label">
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
	margin-bottom: 1.1rem;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 31px;
	letter-spacing: -0.02em;
	white-space: pre;
}
</style>