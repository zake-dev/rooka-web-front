<template>
  <div class="input-wrapper">
    <span
      v-show="isPlaceholderVisible"
      class="placeholder"
      @click="handleFocus"
    >
      {{ placeholder }}
    </span>

    <input
      ref="yearInput"
      class="input"
      v-model="year"
      placeholder="YYYY"
      inputmode="numeric"
      maxlength="4"
      @input="handleYearInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span class="divider divider__left">/</span>
    <input
      ref="monthInput"
      class="input"
      v-model="month"
      placeholder="MM"
      inputmode="numeric"
      maxlength="2"
      @input="handleMonthInput"
      @blur="handleBlurMonth"
    />
    <span class="divider divider__right">/</span>
    <input
      ref="dateInput"
      class="input"
      v-model="date"
      placeholder="DD"
      inputmode="numeric"
      maxlength="2"
      @input="handleDateInput"
      @blur="handleBlur"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  props: {
    modelValue: Object,
    placeholder: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /* Ref */
    const yearInput = ref(null)
    const monthInput = ref(null)
    const dateInput = ref(null)

    /* Local State */
    const year = computed({
      get: () => props.modelValue.year ?? '',
      set: value =>
        emit('update:modelValue', { ...props.modelValue, year: value }),
    })
    const month = computed({
      get: () => props.modelValue.month ?? '',
      set: value =>
        emit('update:modelValue', { ...props.modelValue, month: value }),
    })
    const date = computed({
      get: () => props.modelValue.date ?? '',
      set: value =>
        emit('update:modelValue', { ...props.modelValue, date: value }),
    })
    const isFocused = ref(false)
    const isPlaceholderVisible = computed(
      () =>
        !isFocused.value &&
        year.value === '' &&
        month.value === '' &&
        date.value === '',
    )

    /* Helper Function */
    const filterNumericOnly = text => text.replace(/[^0-9]/g, '')
    const minmax = (value, min, max) => Math.max(min, Math.min(value, max))

    /* Event Handler */
    const handleYearInput = e => {
      e.target.value = filterNumericOnly(e.target.value)

      if (e.target.value.length >= 4) {
        e.target.value = e.target.value.slice(0, 4)
        monthInput.value.focus()
      }
    }
    const handleMonthInput = e => {
      e.target.value = filterNumericOnly(e.target.value)

      if (e.target.value.length >= 2) {
        e.target.value = e.target.value.slice(0, 2)
        dateInput.value.focus()
      }
    }
    const handleDateInput = e => {
      e.target.value = filterNumericOnly(e.target.value)

      if (e.target.value.length >= 2) {
        e.target.value = e.target.value.slice(0, 2)
        e.target.blur()
      }
    }
    const handleFocus = () => {
      isFocused.value = true
      yearInput.value.focus()
    }
    const handleUpdateDate = () => {
      const lastDate = new Date(year.value, month.value, 0).getDate()
      date.value = minmax(date.value, 1, lastDate).toString().padStart(2, '0')
    }
    const handleBlur = () => {
      isFocused.value = false
      if (date.value) handleUpdateDate()
    }
    const handleBlurMonth = () => {
      if (month.value !== '')
        month.value = minmax(month.value, 1, 12).toString().padStart(2, '0')
      handleBlur()
    }

    return {
      /* Refs */
      yearInput,
      monthInput,
      dateInput,
      /* Variables */
      year,
      month,
      date,
      isFocused,
      isPlaceholderVisible,
      /* Functions */
      handleYearInput,
      handleMonthInput,
      handleDateInput,
      handleFocus,
      handleBlur,
      handleBlurMonth,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.input-wrapper {
  height: 40px;
  border-radius: 7px;
  position: relative;
  background-color: $gray1;
  display: flex;
  flex-direction: row;
}
.placeholder {
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  position: absolute;
  z-index: 10;
  border-radius: 7px;
  background-color: $gray1;
  color: $gray4;
}
.input {
  @extend .font__content-text;
  width: 100%;
  border: none;
  background-color: transparent;
  color: $gray6;
  text-align: center;

  &::placeholder {
    @extend .font__content-text;
    text-align: center;
    color: $gray4;
  }
  &:focus {
    outline: none;
  }
}
.divider {
  @extend .font__content-text;
  position: absolute;
  top: 8px;
  color: $gray6;

  &__left {
    left: 32.7%;
  }
  &__right {
    right: 32.7%;
  }
}
</style>
