<template>
	<div class="modal-content">
    <div class="modal-content-title">
      <span class="modal-content-title__text font-mobile__page-title">인스타그램 공유</span>
      <CloseModalButton></CloseModalButton>
    </div>
	
		<div class="modal-content-body">
			STEP 1<br>
      카드 이미지를 저장해주세요!
      <div class="modal-content-body-buttons"></div>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
  
import CloseModalButton from '@/components/Button/CloseModalButton.vue'

export default {
  components: {
    CloseModalButton
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const soldier = computed(() => (store.state.mailBox.key ? store.state.mailBox.soldier : store.state.registerForm))
    const template = computed(() => `📮${soldier.value.name} 인편 주소 나왔어요📮\n안녕하세요 ${soldier.value.name}의 인편지기입니다!\n${soldier.value.name}가 ${toKoreanDateString(soldier.value.enterDate)}에 공군훈련소에 입소했습니다.\n열심히 훈련받고 있을 ${soldier.value.name}를 위해 짧게나마 응원의 메시지를 적어서 편지를 보내 주시면 감사하겠습니다!\n\n아래 링크를 통해 정보 입력 없이 바로 편지를 작성할 수 있어요🤗\n\n💌루카에서 인편 쓰는 방법💌\n❶ 아래 링크를 통해 ${soldier.value.name}의 인편함으로 간다.\n❷ 편지 쓰기 버튼을 눌러 바로 편지를 작성한다.`)
    
    return {
      /* Variables */
      soldier,
      template
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
  flex: 1;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	height: 55vh;
	padding: 24px;
  
  &-title {
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &__text {
      color: $gray6;
    }
  }
  
  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 24px;

    &-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>