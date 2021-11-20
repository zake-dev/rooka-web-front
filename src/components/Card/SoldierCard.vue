<template>
<div class="card-wrapper">
	<!-- 이미지로 렌더될 html -->
	<div id="card-html" class="card">
		<div class="card-content">
			<div class="card-content-row mb-3">
				<p class="font-mobile__title">{{ soldier.name }} 훈련병</p>
				<img class="card-content__image" :src="MilitaryHelmetPng" />
			</div>
			
			<table class="mt-1">
				<tr>
					<td class="font-mobile__content-title pe-2">생년월일</td>
					<td class="font-mobile__content-text ps-1">{{ toKoreanDateString(soldier.birthDate) }}</td>
				</tr>
				<tr class="mt-2">
					<td class="font-mobile__content-title pe-2">군종</td>
					<td class="font-mobile__content-text ps-1">{{ toKoreanMilitaryType(soldier.militaryType) }}</td>
				</tr>
				<tr class="mt-2">
					<td class="font-mobile__content-title pe-2">입대일</td>
					<td class="font-mobile__content-text ps-1">{{ toKoreanDateString(soldier.enterDate) }}</td>
				</tr>
        <tr v-if="soldier.militaryType === 'ARMY'" class="mt-2">
					<td class="font-mobile__content-title pe-2">부대</td>
					<td class="font-mobile__content-text ps-1">{{ soldier.trainingCenterName }}</td>
				</tr>
        <tr v-if="soldier.militaryType === 'AF'" class="mt-2">
					<td class="font-mobile__content-title pe-2">기수</td>
					<td class="font-mobile__content-text ps-1">{{ soldier.kisu }}기</td>
				</tr>
			</table>
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
		margin-top: 71px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		
		&__text {
			color: $gray5;
			text-align: right;
		}
	}
}
#card-image {
	opacity: 0;
	width: 327px;
	height: 327px;
	transition: opacity .3s ease;
}
</style>