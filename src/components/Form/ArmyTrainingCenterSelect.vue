<template>
	<div class="form-select-wrapper">
		<select class="form-select">
			<option class="form-select__placeholder-text"
              value=""
              hidden
			>입영 부대를 선택해주세요</option>
			<option v-for="trainingCenterName in trainingCenterNames"
              :key="trainingCenterName"
              :value="trainingCenterName"
              :selected="trainingCenterName === soldier.trainingCenterName"
			>{{ trainingCenterName }}</option>
		</select>
	</div>
</template>
	

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
	
import * as CodeApi from "@/api/code/CodeApi";

export default {
	setup() {
    /* Vuex */
    const store = useStore();
    const soldier = computed(() => store.state.registerForm);
    
		/* Local State */
		const trainingCenterNames = reactive([]);
		
		/* Fetch Data */
		(async () => {
			const { data } = await CodeApi.getTrainingCenterNames();
			data.forEach((name) => trainingCenterNames.push(name));
		})();

		return {
      /* Variables */
      soldier,
			trainingCenterNames,
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