<template>
	<MobileLayout></MobileLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MobileLayout from "@/components/Layout/MobileLayout.vue";

export default defineComponent({
 	name: "App",
	components: {
		MobileLayout,
	}
});
</script>


<style lang="scss">
@import  "@/scss/_variables.scss";

/* Reset */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
/* Fonts */
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
@import url(//fonts.cdnfonts.com/css/lane---narrow);
	
.font-mobile {
	font-style: normal;
	
	&__title {
		font-weight: bold;
		font-size: 30px;
		line-height: 36px;
	}
	&__semi-title {
		font-weight: bold;
		font-size: 24px;
		line-height: 31px;
		letter-spacing: -0.02em;
	}
	&__page-title {
		font-weight: bold;
		font-size: 16px;
		line-height: 21px;
		letter-spacing: -0.02em;
	}
	&__input-label {
		font-weight: bold;
		font-size: 14px;
		line-height: 18px;
		letter-spacing: -0.02em;
	}
	&__button-text {
		font-weight: normal;
		font-size: 14px;
		line-height: 18px;
		letter-spacing: -0.02em;
	}
	&__content-title {
		font-weight: bold;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: -0.02em;
	}
	&__content-text {
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
	}
	&__caption {
		font-weight: normal;
		font-size: 10px;
		line-height: 14px;
		letter-spacing: -0.02em;
	}
}
	
#app {
	height: 100vh;
	width: 100vw;
	font-family: 'Spoqa Han Sans Neo', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: $white;
	color: $black;
}
	
.button {
	border: none;
	background-color: transparent;
	color: $black;
}
</style>