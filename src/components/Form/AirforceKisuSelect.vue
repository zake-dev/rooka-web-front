<template>
	<div class="form-select-wrapper">
		<select class="form-select" disabled>
			<option class="form-select__placeholder-text"
              value=""
              hidden
			>입영 기수를 선택해주세요</option>
      <option value="832" selected>
        832기
      </option>
			<option v-for="(kisu, enterDate) in kisuAndEnterDates"
              :key="kisu"
              :value="kisu"
              :selected="kisu === soldier.kisu"
			>{{ toKoreanDateString(enterDate) }} ({{ kisu }})</option>
		</select>
	</div>
</template>
	

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
	
import * as CodeApi from '@/api/code/CodeApi'
  
import { toKoreanDateString } from '@/utils/TextFormatter'

export default {
	setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => store.state.registerForm)
    
    /* Local State */
    const kisuAndEnterDates = reactive([])

    /* Fetch Data */
    ;(async () => {
      //const { data } = await CodeApi.getTrainingCenterNames()
      //data.forEach((name) => trainingCenterNames.push(name))
      store.dispatch('registerForm/UPDATE_KISU', '832')
	  })()

		return {
      /* Variables */
      soldier,
			kisuAndEnterDates,
      /* Functions */
      toKoreanDateString
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';
	
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