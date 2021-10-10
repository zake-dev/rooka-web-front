<template>
	<div class="list-item-wrapper">
		<div v-if="mail" class="list-item">
			<div class="list-item-row mt-1 px-1">
				<span class="font-mobile__content-title">
					{{ mail.author }} ({{mail.relationship}})
				</span>
				<span class="list-item__caption font-mobile__caption mt-1">
					{{ new Date(mail.createdAt).toLocaleDateString() }}
				</span>
			</div>
			<span class="list-item__text font-mobile__content-text mt-1 px-1">
				{{ mail.preview }}
			</span>
			
			<MailStatusChip :mail="mail" class="mt-2"></MailStatusChip>
		</div>
	</div>
</template>

<script>
import MailStatusChip from "@/components/Chip/MailStatusChip.vue";
	
export default {
	components: {
		MailStatusChip,
	},
	props: {
		mail: Object,
	},
	setup(props) {
		
	}
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.list-item {
	width: 100%;
	height: 100%;
	padding: 12px;
	background-color: $white;
	display: flex;
	flex-direction: column;
	
	&-wrapper {
		width: 100%;
		height: 94px;
		margin-top: 16px;
		background-color: $gray1;
		border-radius: 7px;
		box-shadow: 0px 6px 17px -1px #0000000D;
	}
	&-row {
		display: inline-flex;
		justify-content: space-between;
	}
	&__caption {
		color: $gray3;
	}
	&__text {
		color: $gray5;
	}
}
</style>