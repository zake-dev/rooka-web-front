<template>
  <div class="list-item-wrapper">
    <div v-if="mail" class="list-item">
      <div class="list-item-row my-1 px-1">
        <span class="font__content-title">
          {{ mail.author }} ({{ mail.relation }})
        </span>
        <span class="list-item__caption font__caption mt-1">
          {{ new Date(mail.createAt).toLocaleDateString() }}
        </span>
      </div>
      <div class="list-item-row">
        <span class="list-item__text font__content-text px-1">
          {{ mail.title }}
        </span>
      </div>

      <MailStatusChip :mail="mail" class="mt-2"></MailStatusChip>
    </div>
  </div>
</template>

<script>
import MailStatusChip from '@/components/Chip/MailStatusChip.vue'

export default {
  components: {
    MailStatusChip,
  },
  props: {
    mail: Object,
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.list-item {
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;

  &-wrapper {
    width: 100%;
    height: 94px;
    margin-top: 16px;
    background-color: $gray1;
    border-radius: 7px;
    box-shadow: 0px 6px 17px -1px #0000000d;
  }
  &-row {
    display: inline-flex;
    justify-content: space-between;
  }
  &__caption {
    color: $gray3;
  }
  &__text {
    height: 16px;
    width: 100%;
    display: inline-block;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $gray5;
  }
  &:hover {
    cursor: pointer;
    background-color: $gray1;
  }
}
</style>
