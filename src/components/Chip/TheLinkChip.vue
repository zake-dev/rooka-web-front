<template>
  <div class="chip">
    <span class="chip__text">rooka.kr/</span>
    <span class="chip__text chip__text--bold">
      <slot />
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.chip {
  height: 72px;
  width: fit-content;
  padding: 0 40px;
  border-radius: 36px;
  background-color: $rookaYellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__text {
    font-family: Spoqa Han Sans Neo;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    color: $rookaYellowDark3;

    &--bold {
      font-weight: 700;
      color: $rookaYellowDark4;
    }
  }
}
</style>
