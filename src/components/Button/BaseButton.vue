<template>
  <button class="button">
    <span class="font__button-text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.button {
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  border: none;
  background-color: transparent;
  transition: background-color 0.2s ease, color 0.2s ease;
  flex: 1;
  height: 3rem;
  padding: 0 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &-success,
  &-green {
    background-color: $armyGreen;
    color: $white;
  }
  &-info,
  &-blue {
    background-color: $airForceBlue;
    color: $white;
  }
  &-light {
    background-color: $gray1;
    color: $gray5;
  }
  &-secondary,
  &-gray {
    background-color: $gray5;
    color: $white;
  }
  &-primary,
  &-dark {
    background-color: $gray6;
    color: $white;
  }
  &:disabled {
    background-color: $gray2 !important;
    color: $white !important;
  }
}
</style>
