<template>
  <div class="form-select-wrapper">
    <select class="form-select" :value="modelValue" @change="handleSelect">
      <option class="form-select__placeholder-text" value="" hidden>
        입영 기수를 선택해 주세요
      </option>
      <option
        v-for="{ kisu, enterDate } in kisuAndEnterDates"
        :key="kisu"
        :value="kisu"
        :selected="kisu === modelValue"
      >
        {{ kisu }}기 ({{ toKoreanDateString(enterDate) }})
      </option>
    </select>
    <img class="form-select__icon" :src="DropdownArrowIconPng" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { toKoreanDateString } from '@/utils/TextFormatter'

import DropdownArrowIconPng from '@/assets/icons/dropdown-arrow-icon.png'

export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /* Vuex */
    const store = useStore()
    const kisuAndEnterDates = computed(
      () => store.state.registerForm.selectableKisus,
    )

    /* Event Handler */
    const handleSelect = e => emit('update:modelValue', e.target.value)

    return {
      /* Assets */
      DropdownArrowIconPng,
      /* Variables */
      kisuAndEnterDates,
      /* Functions */
      toKoreanDateString,
      handleSelect,
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
  width: 100%;
  padding: 8px 12px;
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
    color: $gray3;
  }
}
</style>
