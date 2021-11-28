<template>
	<div class="modal-content">
    <div class="modal-content-title">
      <span class="modal-content-title__text font-mobile__page-title">공유하기</span>
      <CloseModalButton></CloseModalButton>
    </div>
	
		<div class="modal-content-body masked-overflow">
			<div class="modal-content-body-buttons">
        <ShareToInstagramButton></ShareToInstagramButton>
        <ShareToFacebookButton></ShareToFacebookButton>
        <ShareToKakaotalkButton></ShareToKakaotalkButton>
      </div>
      
      <div class="modal-content-body-links">
        <span class="modal-content-body-links__label font-mobile__content-title">인터넷 편지함 링크</span>
      </div>
      
      <div class="modal-content-body-templates">
        <span class="modal-content-body-templates__label font-mobile__content-title">공유 템플릿</span>
      </div>
		</div>
	</div>
</template>

<script>
import CloseModalButton from '@/components/Button/CloseModalButton.vue'
import ShareToInstagramButton from '@/components/Button/ShareToInstagramButton.vue'
import ShareToFacebookButton from '@/components/Button/ShareToFacebookButton.vue'
import ShareToKakaotalkButton from '@/components/Button/ShareToKakaotalkButton.vue'

export default {
  components: {
    CloseModalButton,
    ShareToInstagramButton,
    ShareToFacebookButton,
    ShareToKakaotalkButton
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
	padding: 16px;
  
  &-title {
    margin: 8px;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &-text {
      color: $gray6;
    }
  }
  
  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 22px;

    &-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &-links {
      margin-top: 16px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &-templates {
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>