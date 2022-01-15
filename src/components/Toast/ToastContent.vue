<template>
  <div ref="cardRef">
    <span>
      {{ text }}<Emoji>{{ emoji }}</Emoji>
    </span>
  </div>
</template>

<script>
import { ref } from 'vue'

import Emoji from '@/components/Decorator/Emoji'

export default {
  components: {
    Emoji,
  },
  props: {
    toastId: Number,
    text: String,
    emoji: String,
  },
  setup(props) {
    /* Ref */
    const cardRef = ref()
    console.log(props)

    return {
      /* Variables */
      cardRef,
    }
  },
}
</script>

<style scoped lang="scss"></style>
