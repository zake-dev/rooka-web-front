<template>
	<router-view />
</template>

<style lang="scss">
/* Colors */
$black: black;
$white: white;
$diminishedWhite: #E5E5E5;
$gray1: #F6F7FB;
$gray2: #D8DBE0;
$gray3: #777B83;
$gray4: #595B60;
$gray5: #45474D;
$rookaBlue: #80ADF0;
$rookaRed: #CF5454;
$armyGreen: #4A743F;
$airforceBlue: #3481C8;

/* Fonts */
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

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
	font-family: 'Spoqa Han Sans Neo', 'sans-serif';
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: $diminishedWhite;
	color: $black;
}
</style>