<template>
  <div class="list-item-wrapper">
    <div v-if="mail" class="list-item">
      <div class="list-item-row m-1">
        <span class="font__content-title">
          {{ mail.author }} ({{ mail.relation }})
        </span>
        <span class="list-item__caption font__caption">
          {{ new Date(mail.createAt).toLocaleDateString() }}
        </span>
      </div>
      <div class="list-item-row mx-1">
        <span class="list-item__text font__content-text">
          {{ mail.title }}
        </span>
      </div>

      <MailStatusChip :mail="mail" class="mt-2" />
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

.list-item-wrapper {
  width: 100%;
  min-height: 112px;
  background-color: $gray1;
  border-radius: 7px;
  box-shadow: 0px 6px 17px -1px #0000000d;
}

.list-item {
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;

  &-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__caption {
    color: $gray4;
  }
  &__text {
    width: 100%;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $gray6;
  }
  &:hover {
    cursor: pointer;
    background-color: $gray1;
  }
}
</style>
