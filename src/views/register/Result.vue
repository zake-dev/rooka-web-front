<template>
	<div class="page-wrapper">
		<p class="font-mobile__semi-title">
			편지함 링크가<br>생성됐어요! <Emoji>😍</Emoji>
		</p>
		<p class="font-mobile__content-text mt-2 mb-3">
			아래의 이미지를 저장하여 링크와 함께 공유해보세요!
		</p>
		
		<SoldierCard :soldier="soldier"></SoldierCard>
		
		<div class="action-container">
			<RoundedButton class="button-gray button-lg mb-3"
					 	   text="링크 공유하기"
					   	   @click="handleClickShareLink"
	    	></RoundedButton>
			<RoundedButton class="button-dark button-lg"
					  	   text="첫 편지 쓰기"
					  	   @click="handleClickNewMail"
	    	></RoundedButton>
		</div>
	</div>
</template>

<script>
import { ref, computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
  
import { openModal } from '@/utils/DialogHandler'

import Emoji from '@/components/Decorator/Emoji.vue'
import SoldierCard from '@/components/Card/SoldierCard.vue'
import RoundedButton from '@/components/Button/RoundedButton.vue'

export default {
	components: {
    Emoji,
		SoldierCard,
		RoundedButton
	},
	setup() {
		/* Vuex */
		const store = useStore()
		const soldier = computed(() => store.state.registerForm)
		
		/* Router */
		const router = useRouter()
			
		/* Event Handler */
		const handleClickShareLink = () => openModal('ShareToSns')
		const handleClickNewMail = () => {
      router.push(`/${soldier.value.key}/mail`)
    }
    
    onUnmounted(() => store.dispatch('registerForm/RESET'))
		
		return {
			/* Variables */
			soldier,
			/* Functions */
			handleClickShareLink,
			handleClickNewMail
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
	padding: 48px 32px;
}
.submitted-form {
	margin: 32px 0;
	
	&-row {
		padding: 16px 8px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	&__divider {
		width: 100%;
		height: 0;
		border-bottom: 1px solid $gray2;
	}
}
.action-container {
	margin-top: 24px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>