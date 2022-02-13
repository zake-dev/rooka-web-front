<template>
  <div class="card-wrapper">
    <SoldierCardImage class="card-image" :uuid="uuid" />
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
.card-wrapper {
  box-shadow: 0px 6px 17px -1px #0000000d;
  border-radius: 7px;
}
</style>
