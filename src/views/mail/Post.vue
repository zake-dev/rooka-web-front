<template>
	<div class="page-wrapper">
		<div class="mail-header">
      <table>
        <tr>
          <td>보내는 사람</td>
          <td>
            <input placeholder="보내는 사람의 이름을 적어주세요" />
          </td>
        </tr>
        <tr>
          <td>관계</td>
          <td>
            <input placeholder="훈련병과의 관계를 적어주세요" />
          </td>
        </tr>
        <tr>
          <td>주소</td>
          <td>
            <input placeholder="답장을 받을 주소를 입력해주세요" />
          </td>
        </tr>
      </table>  
    </div>
    
    <div class="mail-content masked-overflow">
      <div class="mail-content__input font-mobile__semi-title" placeholder="제목을 입력해주세요" contenteditable></div>
      <div class="mail-content__textarea font-mobile__content-text" placeholder="내용을 입력해주세요" contenteditable></div>
      <div class="mail-content__scroll-area"></div>
    </div>
    
    <div class="mail-footer">
      <button class="button">사진</button>
      <button class="button">소식</button>
      <button class="button">보내기</button>
    </div>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
  


export default {
	components: {
	},
	setup() {
		/* Vuex */
		const store = useStore()
    
		/* Router */
		const router = useRouter()
			
		/* Event Handler */
		
		return {
			/* Variables */
			/* Functions */
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
    height: 124px;
    padding: 16px 32px;
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
      min-height: 320px;
      outline: none;
      
      &:empty:before {
        content: attr(placeholder);
        color: $gray3;
      }
    }
    &__scroll-area {
      height: 32px;
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