<template>
	<div class="page-wrapper">
		<div class="mailbox-header">
			<div class="mailbox-header-title mb-2">
				<span class="font-mobile__title me-2">{{ soldier.name }} 훈련병</span>
				<InfoButton class="mb-1"></InfoButton>
			</div>
			<span class="font-mobile__content-text">
				{{ headerMessage }}
			</span>
		</div>
		
		<div class="mailbox masked-overflow">
			
		</div>
		
		<div class="action-buttons">
			<IconButton class="button-dark me-2"
						fontAwesomeIcon="fas fa-share-alt"
						@click="handleClickShare"
			></IconButton>
			<RoundedButton class="button-dark button-md"
						   text="편지 쓰기"
						   @click="handleClickNewMail"
			></RoundedButton>	
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

import InfoButton from "@/components/Button/InfoButton.vue";
import IconButton from "@/components/Button/IconButton.vue";
import RoundedButton from "@/components/Button/RoundedButton.vue";

export default {
	components: {
		InfoButton,
		IconButton,
		RoundedButton,
	},
	setup() {
		/* Local State */
		// TODO: 실제 데이터 Fetch하도록 변경, Vuex 적용
		const context = computed(() => {
			const context1 = {
				soldier: {
					name: "김루카",
					birthOfDate: "2000-01-01",
					militaryType: "공군",
					enterDate: "2021-12-10",
				},
				state: "OPEN",
				mails: [],
			};
			const context2 = {
				soldier: {
					name: "김루카",
					birthOfDate: "2000-01-01",
					militaryType: "공군",
					enterDate: "2021-12-10",
				},
				state: "OPEN",
				mails: [
					{
						author: "김공군",
						relationship: "동생",
						body: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						state: "PENDING",
					},
					{
						author: "이힘찬",
						relationship: "친구",
						body: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						state: "PENDING",
					}
				],
			};
			const context3 = {
				soldier: {
					name: "김루카",
					birthOfDate: "2000-01-01",
					militaryType: "공군",
					enterDate: "2021-12-10",
				},
				state: "OPEN",
				mails: [
					{
						author: "김공군",
						relationship: "동생",
						body: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						author: "이힘찬",
						relationship: "친구",
						body: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						author: "김공군",
						relationship: "동생",
						body: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						author: "이힘찬",
						relationship: "친구",
						body: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						author: "강해병",
						relationship: "엄마",
						body: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "강해병",
						relationship: "엄마",
						body: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "정대한",
						relationship: "아빠",
						body: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "정대한",
						relationship: "아빠",
						body: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
				],
			};
			const context4 = {
				soldier: {
					name: "김루카",
					birthOfDate: "2000-01-01",
					militaryType: "공군",
					enterDate: "2021-12-10",
				},
				state: "OPEN",
				mails: [
					{
						author: "김공군",
						relationship: "동생",
						body: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "PENDING",
					},
					{
						author: "이힘찬",
						relationship: "친구",
						body: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "PENDING",
					},
					{
						author: "강해병",
						relationship: "엄마",
						body: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "정대한",
						relationship: "아빠",
						body: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "FAILED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
				],
			};
			const context5 = {
				soldier: {
					name: "김루카",
					birthOfDate: "2000-01-01",
					militaryType: "공군",
					enterDate: "2021-12-10",
				},
				state: "CLOSED",
				mails: [
					{
						author: "김공군",
						relationship: "동생",
						body: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						author: "이힘찬",
						relationship: "친구",
						body: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						author: "강해병",
						relationship: "엄마",
						body: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "정대한",
						relationship: "아빠",
						body: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						author: "최민국",
						relationship: "애인",
						body: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
				],
			};
			const context6 = {
				soldier: {
					name: "김루카",
					birthOfDate: "2000-01-01",
					militaryType: "공군",
					enterDate: "2021-12-10",
				},
				state: "CLOSED",
				mails: [],
			};
			
			const id = location.href.slice(-4);
			switch (id) {
				case "1234": return context1;
				case "1235": return context2;
				case "1236": return context3;
				case "1237": return context4;
				case "1238": return context5;
				case "1239": return context6;
			}
		});
		const soldier = computed(() => context.value.soldier);
		const mails = computed(() => context.value.mails);
		const headerMessage = computed(() => {
			const { soldier, state, mails } = context.value;
			const totalCount = mails.length;
			const pendingCount = mails.filter((mail) => mail.state === "PENDING").length;
			const deliveredCount = mails.filter((mail) => mail.state === "DELIVERED").length;
			
			switch (state) {
				case "OPEN":
					if (totalCount === 0)
						return "아직 받은 편지가 없네요. 지금 마음을 담아 편지를 보내보세요!";
					if (deliveredCount === 0)
						return `${pendingCount}통의 편지가 전달될 예정이에요. 지금 편지를 보내보세요!`
					if (pendingCount === 0)
						return `${deliveredCount}통의 편지가 전달됐어요. 지금 마음을 담아 편지를 보내보세요!`;
					return `총 ${deliveredCount}통의 편지가 전달됐고, ${pendingCount}통의 편지가 전달될 예정이에요.`;
				case "CLOSED":
					return (totalCount === 0) ? `인터넷 편지가 마감되었어요. 수고 많았어요 ${soldier.name}님!`
											  : `인터넷 편지가 마감되었어요. 소중한 ${deliveredCount}통의 편지 감사합니다!`;
			}
		});
		
		/* Event Handler */
		const handleClickShare = () => {
			alert('아직 제공되지 않는 서비스입니다.');
		};
		const handleClickNewMail = () => {
			alert('아직 제공되지 않는 서비스입니다.');
		};
		
		return {
			/* Variables */
			soldier,
			headerMessage,
			mails,
			/* Functions */
			handleClickShare,
			handleClickNewMail,
		}
	}
}
</script>

<style scoped lang="scss">
.mailbox-header {
	width: 100%;
	height: 112px;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
	&-title {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
}
.action-buttons {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 94px;
	display: inline-flex;
	justify-content: center;
}
</style>