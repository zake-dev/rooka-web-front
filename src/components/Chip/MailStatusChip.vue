<template>
  <div>
    <div v-if="mail.state === 'PENDING'" class="chip chip-pending">
      <span class="font-mobile__tag">전달 대기</span>
    </div>
    <div v-else-if="mail.state === 'DELIVERED'" class="chip chip-delivered">
      <span class="font-mobile__tag me-1">전달 완료</span>
      <span class="font-mobile__caption">
        {{ new Date(mail.deliveredAt).toLocaleDateString() }}
      </span>
    </div>
    <div v-else class="chip chip-failed">
      <span class="font-mobile__tag">전달 실패</span>
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

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.chip {
  height: 22px;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 11px;
  display: inline-flex;
  justify-content: center;

  &-pending {
    background-color: #fcf2cf;
    color: #ffc700;
  }
  &-delivered {
    background-color: #d7f4d2;
    color: #1fe000;
  }
  &-failed {
    background-color: #ffdfd8;
    color: #ff2e00;
  }
}
</style>
