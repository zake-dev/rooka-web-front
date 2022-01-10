<template>
  <div class="view-wrapper">
    <div class="view-content">
      <span class="view-content__title">링크 하나로</span>
      <span class="view-content__title">간편해지는 인편</span>
      <p class="view-content__text pt-3">
        회원가입부터 각종 정보 입력까지……. 편지 하나 쓰기 정말 힘들죠?
        rooka에서는 매번 이런 귀찮은 과정을 거칠 필요 없이 인편함 링크를 통해
        바로 인편을 작성할 수 있답니다!
      </p>
    </div>

    <div class="view-animations">
      <div class="view-animations-row">
        <div class="view-animations-row__chip">로그인</div>
        <div class="view-animations-row__chip">이름</div>
        <div class="view-animations-row__chip">본인인증</div>
      </div>
      <div class="view-animations-row" style="transform: translateX(-24px)">
        <div class="view-animations-row__chip">앱설치</div>
        <div class="view-animations-row__chip">기수</div>
        <div class="view-animations-row__chip">생년월일</div>
      </div>
      <div class="view-animations-row" style="transform: translateX(24px)">
        <div class="view-animations-row__chip">비밀번호</div>
        <div class="view-animations-row__chip">입영일</div>
        <div class="view-animations-row__chip">아이디</div>
      </div>
      <div class="view-animations-row" style="transform: translateX(16px)">
        <div class="view-animations-row__chip">회원가입</div>
        <div class="view-animations-row__chip">입영부대</div>
      </div>
      <img class="view-animations__arrow" :src="MainIntroductionArrowPng" />
      <MainIntorductionViewLinkChip class="view-animations__link-chip"
        >김루카.12345</MainIntorductionViewLinkChip
      >
    </div>
  </div>
</template>

<script>
import MainIntroductionArrowPng from '@/assets/images/main-introduction-arrow.png'
import MainIntorductionViewLinkChip from './MainIntroductionViewLinkChip.vue'

export default {
  components: {
    MainIntorductionViewLinkChip,
  },
  setup() {
    return {
      MainIntroductionArrowPng,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.view-wrapper {
  position: relative;
  background-color: $gray1;
}

.view-content {
  padding: 32px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  z-index: 0;

  &__title {
    @extend .font__title;
    color: $black;
  }

  &__text {
    @extend .font__content-text;
    color: $gray5;
  }
}

.view-animations {
  flex: 1;
  padding: 16px 32px 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;

    &__chip {
      @extend .font__caption;
      font-size: 14px;
      padding: 6px 14px;
      background-color: $white;
      color: $gray3;
      border-radius: 20px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
