<template>
  <button class="button">
    <div class="button-icon-wrapper">
      <img class="button-icon-wrapper__icon" :src="InstagramIconSvg" />
    </div>
    <span class="button-label font-mobile__caption">인스타그램</span>
  </button>
</template>

<script>
import InstagramIconSvg from '@/assets/icons/instagram-icon.svg'
  
export default {
  setup() {
    return {
      /* Assets */
      InstagramIconSvg
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
  
.button {
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  
  &:hover {
    background-color: $gray2;
  }
  
  &-icon-wrapper {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $gray1;
    
    &__icon {
      width: 24px;
      height: 24px;
    }
  }
  
  &-label {
    color: $gray6;
  }
}
</style>