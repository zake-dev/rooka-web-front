<template>
  <div>
    <div class="mailbox-header">
      <div class="mailbox-header__title mb-2"></div>
      <div class="mailbox-header__message mb-2"></div>
    </div>

    <div class="mailbox">
      <div class="mailbox-list">
        <div v-for="_ in 4" class="mailbox-list__item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
$headerHeight: 112px;

.mailbox-header {
	width: 100%;
	min-height: $headerHeight;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
	&__title {
    height: 36px;
		width: 180px;
    border-radius: 7px;
    background-color: $gray1;
	}
  
  &__message {
    height: 16px;
    width: 100%;
    border-radius: 7px;
    background-color: $gray1;
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
    
    &__item {
      width: 100%;
      height: 94px;
      margin-top: 16px;
      border-radius: 7px;
      background-color: $gray1;
    }
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