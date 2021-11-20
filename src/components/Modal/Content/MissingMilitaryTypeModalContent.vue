<template>
	<div class="modal-content">
		<CloseModalButton></CloseModalButton>
	
		<div class="modal-content-body masked-overflow">
			<p class="modal-content-body__question-text font-mobile__input-label mb-2">
				Q. 해군/해병대는 왜 없나요?
			</p>
			<p class="modal-content-body__answer-text font-mobile__page-title mb-3">
				A. 하루에 받을 수 있는 인터넷 편지의 수량에 제한이 있기 때문입니다.
			</p>
			<p class="modal-content-body__text font-mobile__content-text">
				온갖 것이 희망의 내려온 오직 청춘 꾸며 보배를 부패뿐이다. 피어나기 우는 천지는 수 뼈 우리의 위하여서 것이다. 위하여 같이, 무엇을 할지라도 운다. 그들은 속에서 살았으며, 이것이다. 뼈 이상은 용감하고 우리는 따뜻한 것은 위하여서. 황금시대의 생의 없으면 옷을 천고에 살 뿐이다. 것은 피가 돋고, 없으면, 사막이다. 미묘한 할지라도 무엇을 지혜는 것이다. 그들에게 청춘은 인류의 인생을 보이는 얼음이 커다란 것이 이것이다.<br><br>

				오직 무엇을 이상의 찬미를 생명을 청춘에서만 거친 스며들어 사랑의 이것이다. 역사를 피는 같은 미묘한 얼마나 청춘의 이상의 이것을 꾸며 것이다. 눈이 창공에 우는 그들은 우리의 영원히 그리하였는가? 인간에 미인을 더운지라 속에서 것이다. 시들어 갑 고동을 부패뿐이다. 간에 없으면 봄날의 사막이다. 날카로우나 이는 우리 너의 같지 같이, 뭇 시들어 끓는다. 생명을 곧 사람은 것이다. 품고 우리 석가는 부패뿐이다.<br><br>

			내려온 가슴에 할지라도 그들은 꾸며 열매를 아름다우냐? 때까지 끝까지 놀이 맺어, 찾아 따뜻한 것이다. 너의 하여도 얼마나 밥을 노래하며 철환하였는가? 속에 품었기 아니한 속잎나고, 약동하다. 같으며, 없는 간에 인생을 보는 끓는다. 인간의 대한 이 놀이 지혜는 수 가진 있다. 광야에서 그것을 예가 가는 같은 위하여 쓸쓸하랴? 따뜻한 갑 청춘은 듣는다. 이것이야말로 사랑의 끝에 희망의 피가 그들은 커다란 아름다우냐? 때에, 이상의 인간은 목숨이 같은 황금시대를 풀이 이것이다.
			</p>
		</div>
	</div>
</template>

<script>
import CloseModalButton from '@/components/Button/CloseModalButton.vue'

export default {
  components: {
    CloseModalButton
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.modal-content {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: 472px;
	padding: 32px;
}
.modal-content-body {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 22px;
	
	&__question-text {
		color: $gray3;
	}
	&__answer-text {
		word-break: keep-all;
		color: $gray5;
	}
	&__text {
		color: $gray5;
	}
}
</style>