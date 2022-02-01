<template>
  <div class="skeleton-wrapper">
    <div class="skeleton-area skeleton-area-1">
      <div class="skeleton-shine"></div>
      <div class="skeleton-title skeleton-title-1"></div>
      <div class="skeleton-title skeleton-title-2"></div>
    </div>

    <div class="skeleton-content">
      <div class="skeleton-area skeleton-area-2">
        <div class="skeleton-shine"></div>
        <div class="skeleton-details-row">
          <div class="skeleton-details-row__key"></div>
          <div class="skeleton-details-row__value"></div>
        </div>
        <div class="skeleton-details-row">
          <div class="skeleton-details-row__key"></div>
          <div class="skeleton-details-row__value"></div>
        </div>
        <div class="skeleton-details-row">
          <div class="skeleton-details-row__key"></div>
          <div class="skeleton-details-row__value"></div>
        </div>

        <div class="skeleton-details__link"></div>
      </div>

      <div class="skeleton-area skeleton-area-3">
        <div class="skeleton-shine"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/_variables';

.skeleton-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10% 5%;
}
.skeleton {
  &-area {
    position: relative;

    &-1 {
      height: 30%;
      width: 80%;
    }
    &-2 {
      height: 100%;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    &-3 {
      height: 15%;
      width: 20%;
      background-color: $gray2;
    }
  }
  &-title {
    height: 45%;
    background-color: $gray2;

    &-1 {
      width: 90%;
      display: flex;
      flex-direction: column;
    }
    &-2 {
      width: 100%;
      margin-top: 2.5%;
    }
  }
  &-details-row {
    height: 18%;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__key {
      height: 75%;
      width: 22%;
      background-color: $gray2;
    }
    &__value {
      height: 75%;
      width: 55%;
      background-color: $gray2;
    }
  }
  &-details__link {
    margin-top: 15%;
    height: 17.5%;
    width: 100%;
    background-color: $gray2;
  }
  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 50%;
    width: 100%;
  }
  &-shine {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      120deg,
      transparent 32%,
      #fbfbfb 38%,
      #ffffff 39%,
      #fbfbfb 40%,
      transparent 46%
    );
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: shine 2s infinite;
  }
  @keyframes shine {
    100% {
      background-position: -100% 0;
    }
  }
}
</style>
