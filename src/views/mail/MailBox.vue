<template>
	<div class="page-wrapper">
		<div class="mailbox-header">
			<div class="mailbox-header-title mb-2">
				<span class="font-mobile__title me-2">{{ soldier.name }} 훈련병</span>
				<InfoButton class="mb-1"
							@click="openModal('Profile')"
				></InfoButton>
			</div>
			<span class="font-mobile__content-text">
				{{ headerMessage }}
			</span>
		</div>
		
		<div class="mailbox">
			<div class="mailbox-list masked-overflow">
				<template v-if="mails.length === 0">
					<MailListItem v-for="index in 10"
								  :key="index"
				    ></MailListItem>
				</template>
				<template v-else>
					<MailListItem v-for="mail in mails"
								  :key="mail.id"
								  :mail="mail"
								  @click="handleClickMailListItem(mail.id)"
					></MailListItem>
				</template>
			</div>
		</div>
		
		<div class="action-buttons" :class="{ 'action-buttons--closed': !isSendable }">
			<ShareButton @click="handleClickShare"></ShareButton>
			<RoundedButton v-if="isSendable"
						   class="button-dark button-md ms-2"
						   text="편지 쓰기"
						   @click="handleClickNewMail"
			></RoundedButton>	
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
	
import { openModal } from "@/utils/DialogHandler";
 
import InfoButton from "@/components/Button/InfoButton.vue";
import ShareButton from "@/components/Button/ShareButton.vue";
import RoundedButton from "@/components/Button/RoundedButton.vue";
import MailListItem from "@/components/MailBox/MailListItem.vue";

export default {
	components: {
		InfoButton,
		ShareButton,
		RoundedButton,
		MailListItem,
	},
	setup() {
    /* Vuex */
    const store = useStore();
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
						id: 1,
						author: "김공군",
						relationship: "동생",
						title: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						state: "PENDING",
					},
					{
						id: 2,
						author: "이힘찬",
						relationship: "친구",
						title: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
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
						id: 1,
						author: "김공군",
						relationship: "동생",
						title: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						id: 2,
						author: "이힘찬",
						relationship: "친구",
						title: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						id: 3,
						author: "김공군",
						relationship: "동생",
						title: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						id: 4,
						author: "이힘찬",
						relationship: "친구",
						title: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						id: 5,
						author: "강해병",
						relationship: "엄마",
						title: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 6,
						author: "강해병",
						relationship: "엄마",
						title: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 7,
						author: "정대한",
						relationship: "아빠",
						title: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 8,
						author: "정대한",
						relationship: "아빠",
						title: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 9,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 10,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
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
						id: 1,
						author: "김공군",
						relationship: "동생",
						title: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "PENDING",
					},
					{
						id: 2,
						author: "이힘찬",
						relationship: "친구",
						title: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "PENDING",
					},
					{
						id: 3,
						author: "강해병",
						relationship: "엄마",
						title: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 4,
						author: "정대한",
						relationship: "아빠",
						title: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "FAILED",
					},
					{
						id: 5,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 6,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 7,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
						createdAt: "2020-12-27",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 8,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
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
						id: 1,
						author: "김공군",
						relationship: "동생",
						title: "이것을 밝은 보이는 우는 용기가 있다.",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						id: 2,
						author: "이힘찬",
						relationship: "친구",
						title: "얼음이 밝은 이상, 웃을 것이다. 그들에게 피가 자신과 있는가?",
						createdAt: "2020-12-30",
						deliveredAt: "2020-12-31",
						state: "DELIVERED",
					},
					{
						id: 3,
						author: "강해병",
						relationship: "엄마",
						title: "같은 크고 청춘이 청춘 위하여, 풍부하게 그림자는 뭇 것이다.",
						createdAt: "2020-12-29",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 4,
						author: "정대한",
						relationship: "아빠",
						title: "온갖 꽃 위하여 목숨을 들어 그들은 이상은 운다.",
						createdAt: "2020-12-28",
						deliveredAt: "2020-12-30",
						state: "DELIVERED",
					},
					{
						id: 5,
						author: "최민국",
						relationship: "애인",
						title: "얼마나 구하지 이상의 끓는 아니다.",
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
		const isSendable = computed(() => context.value.state === "OPEN");
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
		const handleClickMailListItem = (id) => {
			console.log(`선택된 메일: ${id}`);
			openModal('RequestPassword');
		};
		const handleClickShare = () => {
			alert('아직 제공되지 않는 서비스입니다.');
		};
		const handleClickNewMail = () => {
			alert('아직 제공되지 않는 서비스입니다.');
		};
		
		return {
			/* Variables */
			soldier,
			isSendable,
			mails,
			headerMessage,
			/* Functions */
			openModal,
			handleClickMailListItem,
			handleClickShare,
			handleClickNewMail,
		}
	}
}
</script>

<style scoped lang="scss">
$headerHeight: 112px;

.mailbox-header {
	width: 100%;
	min-height: $headerHeight;
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
.mailbox {
	width: 100%;
	height: calc(100% - #{$headerHeight});
	padding: 0 16px 64px 16px;
	display: flex;
	flex-direction: column;
	
	&-list {
		padding-top: 8px;
	}
}
.action-buttons {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 94px;
	padding: 16px;
	display: inline-flex;
	justify-content: center;
	
	&--closed {
		justify-content: flex-end;
	}
}
</style>