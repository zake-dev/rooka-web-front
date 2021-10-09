<template>
	<div class="modal-content">
		<button class="modal-content__close-button button button-light"
				@click="handleClickCloseModal"
		>
			<i class="fas fa-times"></i>
		</button>
	
		<div class="modal-content-profile">
			<img class="modal-content-profile__image mb-2"
				 :src="ProfileAirforcePng"
			/>
			<p class="modal-content-profile__name font-mobile__semi-title mb-3">
				{{ soldier.name }} 훈련병
			</p>
			
			<div class="modal-content-profile-info mt-3">
				<div class="modal-content-profile-row">
					<span class="modal-content-profile-row__label font-mobile__content-title"
					>생년월일</span>
					<span class="font-mobile__content-text"
					>{{ toKoreanLocaleDateString(soldier.birthOfDate) }}</span>
				</div>
				<div class="modal-content-profile-row">
					<span class="modal-content-profile-row__label font-mobile__content-title"
					>군종</span>
					<span class="font-mobile__content-text"
					>{{ soldier.militaryType }}</span>
				</div>
				<div class="modal-content-profile-row">
					<span class="modal-content-profile-row__label font-mobile__content-title"
					>입대일</span>
					<span class="font-mobile__content-text"
					>{{ toKoreanLocaleDateString(soldier.enterDate) }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileAirforcePng from "@/assets/images/profile-airforce.png";

export default {
 	name: "ProfileModalContent",
	props: {
		soldier: Object,
	},
	emits: ['closeModal'],
	setup(props, { emit }) {
		/* Helper Function */
		const toKoreanLocaleDateString = (dateString) => {
			const [year, month, day] = dateString.split('-');
			return `${year}년 ${month}월 ${day}일`;
		};
		
		/* Event Handler */
		const handleClickCloseModal = () => emit('closeModal');
		
		return {
			/* Assets */
			ProfileAirforcePng,
			/* Functions */
			toKoreanLocaleDateString,
			handleClickCloseModal,
		};
	},
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.modal-content {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: 220px;
	
	&__close-button {
		width: 23px;
		height: 23px;
		border-radius: 12px;
		font-size: 7px;
	}
}
.modal-content-profile {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: $gray4;
	
	&-info {
		width: 152px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	&-row {
		width: 100%;
		display: inline-flex;
		
		&__label {
			min-width: 44px;
			margin-right: 12px;
		}
	}
	&__image {
		height: 72px;
		width: 72px;
	}
}
</style>