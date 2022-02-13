<template>
  <div class="content masked-overflow">
    <p class="paragraph">
      rooka는「개인정보보호법」에 의거하여, 이용자의 동의를 기반으로 아래와 같은
      개인정보를 수집 및 이용하고 있습니다.
    </p>
    <br />
    <p class="paragraph">
      이용자께서는 아래 내용을 자세히 읽어 보시고, 모든 내용을 이해하신 후에
      동의 여부를 결정해 주시기 바랍니다.
    </p>
    <br />
    <div class="paragraph">
      <p class="paragraph__title">개인정보의 수집 및 이용에 대한 안내</p>

      이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의
      용도로는 사용되지 않습니다.
      <p class="paragraph indent-1">① 개인정보 수집 항목 및 수집·이용 목적</p>
      <p class="paragraph indent-2">가) 수집 항목</p>
      <p class="paragraph indent-3">
        (필수항목) 성명(국문), 생년월일, 군종(육/공), 입영일, 입대기수(공군),
        입영부대 등 본 서비스를 이용하기 위해 이용자가 제공한 정보
      </p>
      <p class="paragraph indent-2">나) 수집 및 이용 목적</p>
      <p class="paragraph indent-3">군 인터넷편지 발송 및 조회 서비스 제공</p>
      <p class="paragraph indent-1">② 개인정보 보유 및 이용기간</p>
      <p class="paragraph indent-2">
        수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지
      </p>
      <p class="paragraph indent-1">③ 동의거부관리</p>
      <p class="paragraph indent-2">
        귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실
        권리가 있습니다. 다만, 귀하가 개인정보의 수집/이용에 동의를 거부하시는
        경우에 본 서비스 이용이 제한될 수 있음을 알려드립니다.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global';
@import '@/scss/_variables';

.content {
  height: 240px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
}
.paragraph {
  @extend .font__content-text;
  color: $gray5;

  &__title {
    @extend .font__content-title;
    color: $gray5;
  }
}
.indent {
  $indent-width: 24px;

  &-1 {
    padding-left: calc(#{$indent-width} * 1);
  }
  &-2 {
    padding-left: calc(#{$indent-width} * 2);
  }
  &-3 {
    padding-left: calc(#{$indent-width} * 3);
  }
}
</style>
