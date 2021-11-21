<template>
	<button class="button send-button" @click="handleSendMail" :disabled="!isSendable">
		<img :src="SendButtonIconSvg" />
	</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
  
import SendButtonIconSvg from '@/assets/icons/send-button-icon.svg'

export default {
	setup() {
    /* Vuex */
    const store = useStore()
    const isSendable = computed(() => store.getters['mail/isSendable'])
    
    /* Router */
		const route = useRoute()
    
    /* Event Handler */
    const handleSendMail = () => {
      store.dispatch('mail/UPDATE_KEY', route.params.key)
      store.dispatch('mail/SEND_MAIL')
    }
    
		return {
      /* Assets */
			SendButtonIconSvg,
      /* Variables */
      isSendable,
      /* Functions */
      handleSendMail
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.send-button {
	width: 80px;
  height: 100%;
  min-height: 23px;
  
  &:disabled {
    background-color: white !important;
    
    & img {
      opacity: 0.3;
    }
  }
}
img {
  width: 21px;
  height: 21px;
  transition: opacity .3s ease;
}
</style>