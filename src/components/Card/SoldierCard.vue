<template>
	<div class="card">
		<div class="card-content">
			<div class="card-content-row mb-3">
				<p class="font-mobile__title">{{ soldier.name }} 훈련병</p>
				<img class="card-content__image" :src="militaryHelmetImageUrl" />
			</div>
			
			<table class="mt-1">
				<tr>
					<td class="font-mobile__content-title pe-2">생년월일</td>
					<td class="font-mobile__content-text ps-1">{{ toKoreanLocaleDateString(soldier.birthOfDate) }}</td>
				</tr>
				<tr class="mt-2">
					<td class="font-mobile__content-title pe-2">군종</td>
					<td class="font-mobile__content-text ps-1">{{ soldier.militaryType }}</td>
				</tr>
				<tr class="mt-2">
					<td class="font-mobile__content-title pe-2">생년월일</td>
					<td class="font-mobile__content-text ps-1">{{ toKoreanLocaleDateString(soldier.enterDate) }}</td>
				</tr>
			</table>
		</div>
		
		<div class="card-footer">
			<p class="card-footer__text font-mobile__caption mb-2">
				하단의 링크에 접속하여 훈련소에 있는<br>
				{{ soldier.name }} 훈련병에게 편지를 써주세요!
			</p>
			<LinkChip link="http://rooka.co.kr/김루카@123"></LinkChip>
		</div>
		<Logo class="logo-stamp"></Logo>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
	
import Logo from "@/components/Logo/Logo.vue";
import LinkChip from "@/components/Chip/LinkChip.vue";

export interface Soldier {
	name: string;
	birthOfDate: string;
	militaryType: string;
	enterDate: string;
}

export default defineComponent({
 	name: "SoldierCard",
	components: {
		Logo,
		LinkChip,
	},
	props: {
		soldier: Object as PropType<Soldier>,
	},
	setup() {
		/* Asset */
		const militaryHelmetImageUrl = computed(() => require("@/assets/images/military-helmet.png"));
		
		/* Helper Function */
		const toKoreanLocaleDateString = (dateString: string) => {
			const [year, month, day] = dateString.split('-');
			return `${year}년 ${month}월 ${day}일`;
		};
		
		return {
			/* Variables */
			militaryHelmetImageUrl,
			/* Functions */
			toKoreanLocaleDateString,
		};
	}
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.card {
	width: 327px;
	height: 327px;
	padding: 20px;
	box-shadow: 0px 6px 17px -1px #0000000D;
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
</style>