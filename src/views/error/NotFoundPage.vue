<template>
  <div class="page-wrapper">
    <div class="content">
      <p class="content__title">
        여긴 어디...?<br />
        나는 누구...?
        <span class="content__title content__icon">👁️👄👁️</span>
      </p>
      <p class="content__text">
        편지함을 찾을 수 없어요...! 혹시 다른 행성의 주소인 걸까요? 주소가 맞게
        입력됐는지 다시 한 번 확인해주세요!
      </p>

      <div class="decorations">
        <div class="floating-emoji floating-emoji__postbox">📮</div>
        <div class="floating-emoji floating-emoji__star">⭐</div>
        <div class="floating-emoji floating-emoji__ringed-planet">🪐</div>
        <div class="floating-emoji floating-emoji__rocket">🚀</div>
        <div
          class="floating-emoji floating-emoji__globe-showing-asia-australia"
        >
          🌏
        </div>
        <div class="floating-emoji floating-emoji__dizzy">💫</div>
        <div class="floating-emoji floating-emoji__alien">👽</div>
      </div>
    </div>

    <div class="action-buttons">
      <BaseButton class="button-yellow" @click="handleClickGoHome"
        >홈으로 가기</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import BaseButton from '@/components/Button/BaseButton'

export default {
  components: {
    BaseButton,
  },
  setup() {
    /* Router */
    const router = useRouter()

    /* Event Handler */
    const handleClickGoHome = () => router.push('/')

    return {
      /* Functions */
      handleClickGoHome,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/_variables.scss';

.page-wrapper {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #553a03 17.98%, #191919 82.64%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  flex: 1;
  padding: 92px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    @extend .font__semi-title;
    color: $white;
  }
  &__text {
    @extend .font__content-text;
    color: $white;
  }
  &__icon {
    letter-spacing: -0.45rem;
  }
}
.action-buttons {
  position: fixed;
  bottom: 60px;
  width: 100%;
  height: 48px;
  padding: 0 72px;
  display: flex;
  justify-content: center;
}
.decorations {
  flex: 1;
  position: relative;
}
.floating-emoji {
  font-size: 45px;

  &__postbox {
    position: absolute;
    top: 20px;
    right: 0;
  }
  &__ringed-planet {
    position: absolute;
    top: 65px;
    right: 0;
  }
  &__star {
    position: absolute;
    top: 37px;
    left: 0;
  }
  &__globe-showing-asia-australia {
    position: absolute;
    top: 35%;
    left: 0;
  }
  &__rocket {
    position: absolute;
    top: 25%;
    left: 25%;
  }
  &__dizzy {
    position: absolute;
    bottom: 15%;
    right: 20%;
  }
  &__alien {
    position: absolute;
    bottom: 20px;
    right: 0;
  }
}
</style>
