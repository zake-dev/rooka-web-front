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
  padding: 7.5% 5%;
}
.skeleton {
  &-area {
    position: relative;

    &-1 {
      height: 40%;
      width: 80%;
    }
    &-2 {
      height: 85%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    &-3 {
      height: 20%;
      width: 25%;
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
    height: 30%;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__key {
      height: 85%;
      width: 25%;
      background-color: $gray2;
    }
    &__value {
      height: 85%;
      width: 70%;
      background-color: $gray2;
    }
  }
  &-details__link {
    margin-top: 2.5%;
    height: 30%;
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
      90deg,
      transparent 10%,
      #f8f8f8 35%,
      #f8f8f8 37%,
      transparent 50%
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
