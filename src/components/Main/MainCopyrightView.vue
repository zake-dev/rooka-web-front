<template>
  <div class="copyright">
    <span class="copyright__text">rookadotkr@gmail.com</span>
    <span class="copyright__text">
      Copyright © 2022. rooka. All Rights Reserved.<br />
      www.rooka.kr
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.copyright {
  padding: 76px 0 50px;
  background-color: $gray1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__text {
    @extend .font__caption;
    color: $gray3;
    text-align: center;
  }
}
</style>
