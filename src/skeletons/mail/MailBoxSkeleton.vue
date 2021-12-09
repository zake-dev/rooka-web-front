<template>
  <div>
    <div class="mailbox-header">
      <div class="mailbox-header__title mb-2"></div>
      <div class="mailbox-header__message mb-1"></div>
      <div class="mailbox-header__message"></div>
    </div>

    <div class="mailbox">
      <div class="mailbox-list">
        <div v-for="index in 4" :key="index" class="mailbox-list__item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
$headerHeight: 112px;

.mailbox-header {
  width: 100%;
  min-height: $headerHeight;
  padding: 32px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &__title {
    height: 44px;
    width: 180px;
    border-radius: 7px;
    background-color: $gray1;
  }

  &__message {
    height: 16px;
    width: 100%;
    border-radius: 7px;
    background-color: $gray1;
  }
}
.mailbox {
  width: 100%;
  height: calc(100% - #{$headerHeight});
  padding: 0 16px 64px 16px;

  &-list {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__item {
      width: 100%;
      height: 112px;
      border-radius: 7px;
      background-color: $gray1;
    }
  }
}
</style>
