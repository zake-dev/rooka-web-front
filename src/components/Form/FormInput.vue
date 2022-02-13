<template>
  <input class="form-input" :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /* Event Handler */
    const handleInput = event => emit('update:modelValue', event.target.value)

    return {
      handleInput,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
@import '@/scss/_variables.scss';

.form-input {
  @extend .font__content-text;
  flex: 1;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  min-height: 40px;
  padding: 0 16px;
  background-color: $gray1;
  border: none;
  border-radius: 7px;
  color: $gray6;

  &::placeholder {
    @extend .font__content-text;
    color: $gray4;
  }
}
</style>
