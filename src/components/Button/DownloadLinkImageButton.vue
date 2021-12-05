<template>
  <button class="button">
    <div class="button-icon-wrapper">
      <img class="button-icon-wrapper__icon" :src="DownloadIconSvg" />
    </div>
    <span class="button-label font-mobile__caption">카드 이미지<br>저장</span>
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
  
import DownloadIconSvg from '@/assets/icons/download-icon.svg'
  
export default {
  setup() {
    /* Vuex */
    const store = useStore()
    const shareLink = computed(() => store.getters.shareLink)
    
    return {
      /* Assets */
      DownloadIconSvg
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
  
.button {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  
  &:hover {
    background-color: $gray2;
  }
  
  &-icon-wrapper {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $gray1;
    
    &__icon {
      width: 24px;
      height: 21px;
    }
  }
  
  &-label {
    color: $gray6;
  }
}
</style>