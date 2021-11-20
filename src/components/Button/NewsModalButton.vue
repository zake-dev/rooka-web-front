<template>
	<button class="button news-button" @click="handleOpenNewsModal">
		<img :src="NewsButtonIconSvg" />
	</button>
</template>

<script>
import NewsButtonIconSvg from '@/assets/icons/news-button-icon.svg'

export default {
	setup() {
    /* Event Handler */
    const handleOpenNewsModal = () => alert('아직 제공되지 않는 서비스입니다.')
    
		return {
      /* Assets */
			NewsButtonIconSvg,
      /* Functions */
      handleOpenNewsModal
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.news-button {
	width: 80px;
  height: 100%;
  min-height: 23px;
  border-radius: 50%;
  color: $gray5;
}
img {
  width: 21px;
  height: 21px;
}
</style>