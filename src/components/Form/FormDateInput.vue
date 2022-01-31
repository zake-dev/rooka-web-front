<template>
  <div class="input-wrapper">
    <span
      v-show="isPlaceholderVisible"
      class="placeholder"
      @click="handleFocusYear"
    >
      {{ placeholder }}
    </span>

    <input
      ref="yearInput"
      class="input"
      v-model="year"
      placeholder="YYYY"
      inputmode="numeric"
      pattern="[0-9]{4}"
      maxlength="4"
      @keyup="handleYearInput"
      @focus="handleFocusYear"
      @blur="handleBlur"
    />
    <span class="divider divider__left">/</span>
    <input
      ref="monthInput"
      class="input"
      v-model="month"
      placeholder="MM"
      inputmode="numeric"
      pattern="[0-9]{2}"
      maxlength="2"
      @keyup="handleMonthInput"
      @focus="handleFocusMonth"
      @blur="handleBlur"
    />
    <span class="divider divider__right">/</span>
    <input
      ref="dateInput"
      class="input"
      v-model="date"
      placeholder="DD"
      inputmode="numeric"
      pattern="[0-9]{2}"
      maxlength="2"
      @keyup="handleDateInput"
      @focus="handleFocusDate"
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
      filterNumericOnly(e.target.value)
      if (e.target.value.length >= 4) {
        e.target.value = e.target.value.slice(0, 4)
        monthInput.value.focus()
      }
    }
    const handleMonthInput = e => {
      if (year.value === '') {
        e.target.value = ''
        yearInput.value.focus()
        return
      }

      filterNumericOnly(e.target.value)
      if (e.target.value.length >= 2) {
        month.value = minmax(e.target.value.slice(0, 2), 1, 12)
          .toString()
          .padStart(2, '0')
        dateInput.value.focus()
      }
    }
    const handleDateInput = e => {
      if (month.value === '') {
        e.target.value = ''
        monthInput.value.focus()
        return
      }

      filterNumericOnly(e.target.value)
      if (e.target.value.length >= 2) {
        const lastDate = new Date(year.value, month.value, 0).getDate()
        date.value = minmax(e.target.value.slice(0, 2), 1, lastDate)
          .toString()
          .padStart(2, '0')
        e.target.blur()
      }
    }
    const handleFocusYear = () => {
      isFocused.value = true
      yearInput.value.focus()
    }
    const handleFocusMonth = () => {
      isFocused.value = true
      year.value ? monthInput.value.focus() : yearInput.value.focus()
    }
    const handleFocusDate = () => {
      isFocused.value = true
      month.value ? dateInput.value.focus() : monthInput.value.focus()
    }
    const handleBlur = e => {
      isFocused.value = false
      e.target.value = e.target.value.padStart(2, '0')
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
      handleFocusYear,
      handleFocusMonth,
      handleFocusDate,
      handleBlur,
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
