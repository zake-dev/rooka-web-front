<template>
  <img class="card-image" :src="imageUrl" />
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    uuid: String,
  },
  setup(props) {
    return {
      imageUrl: computed(
        () => process.env.VUE_APP_ROOKA_API_URL + `/image/${props.uuid}`,
      ),
    }
  },
}
</script>

<style scoped lang="scss">
.card-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 7px;
}
</style>
