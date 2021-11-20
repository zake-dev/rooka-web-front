<template>
	<div class="page-wrapper">
		<div class="mail-header">
      <div class="mail-header-row">
        <span class="mail-header-row__label font-mobile__content-title me-3">보내는 사람</span>
        <input class="mail-header-row__input" placeholder="보내는 사람의 이름을 적어주세요" />
      </div>
      <div class="mail-header-row">
        <span class="mail-header-row__label font-mobile__content-title me-3">관계</span>
        <input class="mail-header-row__input" placeholder="훈련병과의 관계를 적어주세요" />
      </div>
      <div class="mail-header-row">
        <span class="mail-header-row__label font-mobile__content-title me-3">주소</span>
        <input class="mail-header-row__input" placeholder="답장을 받을 주소를 입력해주세요" />
      </div>
    </div>
    
    <div class="mail-content masked-overflow">
      <div class="mail-content__input font-mobile__semi-title" placeholder="제목을 입력해주세요" contenteditable></div>
      <div class="mail-content__textarea font-mobile__content-text" placeholder="내용을 입력해주세요" contenteditable ref="mailContentInput"></div>
      <div class="mail-content__focus-area" @click="handleFocusContent"></div>
    </div>
    
    <div class="mail-footer">
      <button class="button">사진</button>
      <button class="button">소식</button>
      <button class="button">보내기</button>
    </div>
	</div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
  


export default {
	setup() {
		/* Vuex */
		const store = useStore()
    
		/* Router */
		const router = useRouter()
		
    /* Refs */
    const mailContentInput = ref(null)
    
		/* Event Handler */
    const handleFocusContent = () => mailContentInput.value.focus()
		
		return {
      /* Refs */
      mailContentInput,
			/* Variables */
			/* Functions */
      handleFocusContent
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.page-wrapper {
	display: flex;
  flex-direction: column;
  
}
input {
  border: none;
}
.mail {
  &-header {
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    &-row {
      display: flex;
      flex-direction: row;
      
      &__label {
        min-width: 57px;
      }
      &__input {
        flex: 1;
        
        &::placeholder {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-size: 12px;
          line-height: 16px;
          color: $gray3;
        }
      }
    }
  }
  &-content {
    flex: 1;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    
    &__input {
      margin-bottom: 16px;
      outline: none;
      
      &:empty:before {
        content: attr(placeholder);
        color: $gray3;
      }
    }
    &__textarea {
      outline: none;
      
      &:empty:before {
        content: attr(placeholder);
        color: $gray3;
      }
    }
    &__focus-area {
      height: 300px;
    }
  }
  &-footer {
    height: 56px;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>