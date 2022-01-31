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
      pattern="[0-9]{4}"
      maxlength="4"
      @keyup="handleYearInput"
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

    /* Event Handler */
    const handleYearInput = e => {
      filterNumericOnly(e.target.value)
      if (e.target.value.length >= 4) {
        e.target.value = e.target.value.slice(0, 4)
        monthInput.value.focus()
      }
    }
    const handleMonthInput = e => {
      filterNumericOnly(e.target.value)
      if (e.target.value.length >= 2) {
        e.target.value = Math.min(e.target.value.slice(0, 2), 12)
        dateInput.value.focus()
      }
    }
    const handleDateInput = e => {
      filterNumericOnly(e.target.value)
      if (e.target.value.length >= 2) {
        const maxDate =
          year.value === null || month.value === null
            ? 31
            : new Date(year.value, month.value, 0).getDate()
        e.target.value = Math.min(e.target.value.slice(0, 2), maxDate)
        e.target.blur()
      }
    }
    const handleFocus = () => {
      isFocused.value = true
      yearInput.value.focus()
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
      handleFocus,
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
