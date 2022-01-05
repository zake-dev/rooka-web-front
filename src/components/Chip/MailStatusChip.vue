<template>
  <div>
    <div v-if="mail.status === 'PENDING'" class="chip chip-pending">
      <span class="chip__text font__tag">전달 대기</span>
    </div>
    <div v-else-if="mail.status === 'DELIVERED'" class="chip chip-delivered">
      <span class="chip__text font__tag me-1">전달 완료</span>
      <span class="chip__text font__caption">
        {{ new Date(mail.deliveredAt).toLocaleDateString() }}
      </span>
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
  &-failed {
    background-color: $black;
    color: $gray2;
  }
  &__text {
    color: inherit;
  }
}
</style>
