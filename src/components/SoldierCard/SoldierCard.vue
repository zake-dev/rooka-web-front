<template>
  <div class="card-wrapper">
    <SoldierCardImage :uuid="uuid" />
  </div>
</template>

<script>
import SoldierCardImage from '@/components/SoldierCard/SoldierCardImage.vue'

export default {
  components: {
    SoldierCardImage,
  },
  props: {
    uuid: String,
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.card-wrapper {
  background-color: $gray1;
  box-shadow: 0px 6px 17px -1px #0000000d;
  border-radius: 7px;
}
</style>
