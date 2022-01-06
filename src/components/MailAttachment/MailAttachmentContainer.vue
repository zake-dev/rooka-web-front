<template>
  <div class="image-container">
    <MailAttachmentImage :uuid="uuid" />
    <MailAttachmentButtonDelete class="image-container__button" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import MailAttachmentImage from './MailAttachmentImage.vue'
import MailAttachmentButtonDelete from './MailAttachmentButtonDelete.vue'

export default {
  components: {
    MailAttachmentImage,
    MailAttachmentButtonDelete,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const uuid = computed(() => store.state.mailForm.mail.imageUUID)

    return {
      uuid,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.image-container {
  position: relative;
  border-radius: 8px;
  background-color: transparent;

  &__button {
    position: absolute;
    bottom: 12px;
    right: 8px;
  }
}
</style>
