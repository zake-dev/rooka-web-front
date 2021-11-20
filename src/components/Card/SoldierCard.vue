<template>
<div class="card-wrapper">
	<!-- 이미지로 렌더될 html -->
	<div id="card-html" class="card">
		<div class="card-content">
			<div class="card-content-row mb-3">
				<p class="font-mobile__title">{{ soldier.name }} 훈련병</p>
				<img class="card-content__image" :src="MilitaryHelmetPng" />
			</div>
			
			<div class="detail mt-1">
				<div class="detail-row">
					<span class="detail-row__label font-mobile__content-title">생년월일</span>
					<span class="font-mobile__content-text">{{ toKoreanDateString(soldier.birthDate) }}</span>
				</div>
				<div class="detail-row">
					<span class="detail-row__label font-mobile__content-title">군종</span>
					<span class="font-mobile__content-text">{{ toKoreanMilitaryType(soldier.militaryType) }}</span>
				</div>
				<div class="detail-row">
					<span class="detail-row__label font-mobile__content-title">입대일</span>
					<span class="font-mobile__content-text">{{ toKoreanDateString(soldier.enterDate) }}</span>
				</div>
        <div v-if="soldier.militaryType === 'ARMY'" class="detail-row">
					<span class="detail-row__label font-mobile__content-title">부대</span>
					<span class="font-mobile__content-text">{{ soldier.trainingCenterName }}</span>
				</div>
        <div v-if="soldier.militaryType === 'AF'" class="detail-row">
					<span class="detail-row__label font-mobile__content-title">기수</span>
					<span class="font-mobile__content-text">{{ soldier.kisu }}기</span>
				</div>
			</div>
		</div>
		
		<div class="card-footer">
			<p class="card-footer__text font-mobile__caption mb-2">
				하단의 링크에 접속하여 훈련소에 있는<br>
				{{ soldier.name }} 훈련병에게 편지를 써주세요!
			</p>
			<LinkChip :link="`http://rooka.kr/${soldier.key}`"></LinkChip>
		</div>
		<Logo class="logo-stamp"></Logo>
	</div>

	<!-- 이미지 출력물 -->
	<img id="card-image" />
</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import html2canvas from 'html2canvas'
	
import { toKoreanDateString, toKoreanMilitaryType } from '@/utils/TextFormatter'
	
import MilitaryHelmetPng from '@/assets/images/military-helmet.png'
import Logo from '@/components/Logo/Logo.vue'
import LinkChip from '@/components/Chip/LinkChip.vue'

export default {
	components: {
		Logo,
		LinkChip,
	},
	props: {
		soldier: Object,
	},
	setup() {
		onMounted(async () => {			
			const card = document.getElementById("card-html")
			const canvas = await html2canvas(card, {
				scale: 2,
				onclone: (clonedDocument => clonedDocument.getElementById("card-html").style.display = 'block')
			})
			const cardImage = document.getElementById("card-image")
			cardImage.src = canvas.toDataURL("image/png")
			cardImage.style.opacity = 1
		})
		
		return {
			/* Assets */
			MilitaryHelmetPng,
			/* Functions */
			toKoreanDateString,
      toKoreanMilitaryType
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.card-wrapper {
	width: 327px;
	height: 327px;
	box-shadow: 0px 6px 17px -1px #0000000D;
	border-radius: 7px;
  transform: translateX(-8px);
}
.card {
	display: none;
	width: 327px;
	height: 327px;
	padding: 20px;
	border-radius: 7px;
	background-color: $white;
	
	&-content {
		margin-top: 20px;
		
		&-row {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		&__image {
			width: 34px;
			height: 34px;
			margin-left: 3px;
		}
	}
	&-footer {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		
		&__text {
			color: $gray5;
			text-align: right;
		}
	}
}
.detail {
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  &-row {
    display: flex;
    flex-direction: row;
    
    &__label {
      width: 44px;
      margin-right: 12px;
    }
  }
}
#card-image {
	opacity: 0;
	width: 100%;
	height: 100%;
	divansition: opacity .3s ease;
}
</style>