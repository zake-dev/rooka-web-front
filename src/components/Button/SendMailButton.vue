<template>
	<button class="button send-button" @click="handleSendMail">
		<img :src="SendButtonIconSvg" />
	</button>
</template>

<script>
import { useStore } from 'vuex'
  
import SendButtonIconSvg from '@/assets/icons/send-button-icon.svg'

export default {
	setup() {
    /* Vuex */
    const store = useStore()
    
    /* Event Handler */
    const handleSendMail = () => alert('아직 제공되지 않는 서비습입니다.')
    
		return {
      /* Assets */
			SendButtonIconSvg,
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
  border-radius: 50%;
  color: $gray5;
  
  &:disabled {
    color: $gray2;
  }
}
img {
  width: 21px;
  height: 21px;
}
</style>