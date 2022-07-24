<template>
  <div>
    <div v-if="mail.status === 'PENDING'" class="chip chip-pending">
      <span class="chip__text font__tag">전달 대기</span>
    </div>
    <div v-else-if="mail.status === 'SENT'" class="chip chip-delivered">
      <span class="chip__text font__tag me-1">전달 완료</span>
    </div>
    <div v-else-if="mail.status == 'LOST'" >
      <div class="chip chip-lost">
        <span class="chip__text font__tag">연결 끊김</span>
      </div>
      <div class="m-1">
        <a class=" chip__caption font__caption">
          인편이 전달됐지만 상태를 더 이상 확인할 수 없어요.<br/>
          기훈단 홈페이지에서 확인해주세요.
        </a>
      </div>
    </div>
    <div v-else class="chip chip-failed">
      <span class="chip__text font__tag">전달 실패</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mail: Object,
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.chip {
  height: 24px;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-pending {
    background-color: $gray2;
    color: $gray3;
  }
  &-delivered {
    background-color: $rookaYellow;
    color: $white;
  }
  &-lost {
    background-color: $gray2;
    color: $gray3;
  }
  &-failed {
    background-color: $black;
    color: $gray2;
  }
  &__text {
    color: inherit;
  }
  &__caption {
    color: $gray3;
  }
}
</style>
