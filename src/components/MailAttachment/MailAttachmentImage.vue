<template>
  <img class="image" :src="imageUrl" />
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    uuid: String,
  },
  setup(props) {
    const imageUrl = computed(
      () => process.env.VUE_APP_ROOKA_API_URL + `/image/${props.uuid}`,
    )

    return {
      imageUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
.image {
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
</style>
