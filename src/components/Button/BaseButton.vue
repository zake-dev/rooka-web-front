<template>
  <button class="button">
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@import '@/scss/global.scss';
@import '@/scss/_variables.scss';

.button {
  flex: 1;
  width: 100%;
  min-height: 3rem;
  padding: 0 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
