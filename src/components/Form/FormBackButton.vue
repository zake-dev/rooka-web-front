<template>
  <button class="button form-back-button">
    <i class="fas fa-chevron-left form-back-button__icon"></i>
    <span class="font-mobile__button-text">이전</span>
  </button>
</template>

<style scoped lang="scss">
.form-back-button {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__icon {
    font-size: 20px;
    margin-right: 0.4rem;
  }
}
</style>
