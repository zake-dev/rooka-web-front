<template>
  <div class="form-select-wrapper">
    <select class="form-select">
      <option class="form-select__placeholder-text" value="" hidden>
        입영 부대를 선택해 주세요
      </option>
      <option
        v-for="trainingCenterName in trainingCenterNames"
        :key="trainingCenterName"
        :value="trainingCenterName"
        :selected="trainingCenterName === soldier.trainingCenterName"
      >
        {{ trainingCenterName }}
      </option>
    </select>
    <img class="form-select__icon" :src="DropdownArrowIconPng" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import DropdownArrowIconPng from '@/assets/icons/dropdown-arrow-icon.png'

export default {
  setup() {
    /* Vuex */
    const store = useStore()
    const state = store.state.registerForm
    const soldier = computed(() => state.soldier)
    const trainingCenterNames = computed(
      () => state.selectableTrainingCenterNames,
    )

    return {
      /* Assets */
      DropdownArrowIconPng,
      /* Variables */
      soldier,
      trainingCenterNames,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
@import '@/scss/_variables.scss';

.form-select {
  @extend .font__content-text;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background-color: $gray1;
  border: none;
  border-radius: 7px;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  appearance: none;

  &-wrapper {
    position: relative;
  }

  &__icon {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 14px;
    right: 15px;
  }

  &__placeholder-text {
    color: $gray4;
  }
}
</style>
