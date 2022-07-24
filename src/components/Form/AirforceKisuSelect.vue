<template>
  <div class="form-select-wrapper">
    <select
      id="kisu-select"
      class="form-select"
      v-model="selectedValue"
      @change="handleSelect"
    >
      <option class="form-select__placeholder-text" :value="null" hidden>
        입영 기수를 선택해 주세요
      </option>
      <option
        v-for="{ kisu, enterDate } in kisuAndEnterDates"
        :key="kisu"
        :value="{ kisu, enterDate }"
        :data-kisu="kisu"
      >
        {{ kisu }}기 ({{ toKoreanDateString(enterDate) }})
      </option>
    </select>
    <img class="form-select__icon" :src="DropdownArrowIconPng" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import { toKoreanDateString } from '@/utils/TextFormatter'

import DropdownArrowIconPng from '@/assets/icons/dropdown-arrow-icon.png'

/* Vuex */
const store = useStore()
const state = store.state.registerForm
const kisuAndEnterDates = computed(() => state.selectableKisus)

/* Local State */
const selectedValue = ref(null)

/* Helper Function */
const setSelectedOption = () => {
  const $selectedOption = Array.prototype.find.call(
    document.getElementById('kisu-select').children,
    $option => $option.dataset.kisu === state.soldier.kisu.toString(),
  )

  if ($selectedOption) $selectedOption.selected = true
}

/* Event Handler */
const handleSelect = () => {
  const { kisu, enterDate } = selectedValue.value
  store.dispatch('registerForm/UPDATE_KISU', kisu)
  store.dispatch('registerForm/UPDATE_ENTER_DATE', enterDate)
}

/* Hooks */
onMounted(() => setSelectedOption())
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
