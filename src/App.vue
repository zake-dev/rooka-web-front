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
html, body {
	height: 100%;
	width: 100%;
}

#app {
	height: 100%;
	width: 100%;
	font-family: 'Spoqa Han Sans Neo', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: $white;
	color: $black;
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
	
/* Animation */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
	transition: all .5s ease;
}
.slide-left-enter-from {
	transform: translateX(100vw);	
}
.slide-left-leave-to {
	z-index: 1;
	transform: translateX(-100vw);
}
.slide-left-enter-to,
.slide-left-leave-from {
	z-index: 0;
}
.slide-right-enter-from {
	transform: translateX(-100vw);	
}
.slide-right-leave-to {
	z-index: 1;
	transform: translateX(100vw);
}
.slide-right-enter-to,
.slide-right-leave-from {
	z-index: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity .3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.pop-enter-active,
.pop-leave-active {
	transition: transform .3s cubic-bezier(0.5, 0, 0.5, 1), opacity .3s ease;
}
.pop-enter-from,
.pop-leave-to {
	opacity: 0;
	transform: scale(0.3) translateY(-50%);
}

/* Effect */
.masked-overflow {
  --scrollbar-width: 8px;
  --mask-height: 28px;

  overflow-y: auto;

  /* Our height limit */
  padding-bottom: var(--mask-height);
	
  --mask-image-content: linear-gradient(
    to bottom,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  );

  --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;
  --mask-image-scrollbar: linear-gradient(black, black);
  --mask-size-scrollbar: var(--scrollbar-width) 100%;

  mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
  mask-size: var(--mask-size-content), var(--mask-size-scrollbar);
  mask-position: 0 0, 100% 0;
  mask-repeat: no-repeat, no-repeat;
}
	
/* Spacing */
.m {
	&-0 { margin: 0 }
	&-1 { margin: ($spacer * .25) }
	&-2 { margin: ($spacer * .5) }
	&-3 { margin: $spacer }
	&-4 { margin: ($spacer * 1.5) }
	&t {
		&-0 { margin-top: 0 }
		&-1 { margin-top: ($spacer * .25) }
		&-2 { margin-top: ($spacer * .5) }
		&-3 { margin-top: $spacer }
		&-4 { margin-top: ($spacer * 1.5) }
	}
	&b {
		&-0 { margin-bottom: 0 }
		&-1 { margin-bottom: ($spacer * .25) }
		&-2 { margin-bottom: ($spacer * .5) }
		&-3 { margin-bottom: $spacer }
		&-4 { margin-bottom: ($spacer * 1.5) }
	}
	&s {
		&-0 { margin-left: 0 }
		&-1 { margin-left: ($spacer * .25) }
		&-2 { margin-left: ($spacer * .5) }
		&-3 { margin-left: $spacer }
		&-4 { margin-left: ($spacer * 1.5) }
	}
	&e {
		&-0 { margin-right: 0 }
		&-1 { margin-right: ($spacer * .25) }
		&-2 { margin-right: ($spacer * .5) }
		&-3 { margin-right: $spacer }
		&-4 { margin-right: ($spacer * 1.5) }
	}
	&x {
		&-0 { margin-left: 0; margin-right: 0; }
		&-1 { margin-left: ($spacer * .25); margin-right: ($spacer * .25); }
		&-2 { margin-left: ($spacer * .5); margin-right: ($spacer * .5); }
		&-3 { margin-left: $spacer; margin-right: $spacer; }
		&-4 { margin-left: ($spacer * 1.5); margin-right: ($spacer * 1.5); }
	}
	&y {
		&-0 { margin-top: 0; margin-bottom: 0; }
		&-1 { margin-top: ($spacer * .25); margin-bottom: ($spacer * .25); }
		&-2 { margin-top: ($spacer * .5); margin-bottom: ($spacer * .5); }
		&-3 { margin-top: $spacer; margin-bottom: $spacer; }
		&-4 { margin-top: ($spacer * 1.5); margin-bottom: ($spacer * 1.5); }
	}
}
.p {
	&-0 { padding: 0 }
	&-1 { padding: ($spacer * .25) }
	&-2 { padding: ($spacer * .5) }
	&-3 { padding: $spacer }
	&-4 { padding: ($spacer * 1.5) }
	&t {
		&-0 { padding-top: 0 }
		&-1 { padding-top: ($spacer * .25) }
		&-2 { padding-top: ($spacer * .5) }
		&-3 { padding-top: $spacer }
		&-4 { padding-top: ($spacer * 1.5) }
	}
	&b {
		&-0 { padding-bottom: 0 }
		&-1 { padding-bottom: ($spacer * .25) }
		&-2 { padding-bottom: ($spacer * .5) }
		&-3 { padding-bottom: $spacer }
		&-4 { padding-bottom: ($spacer * 1.5) }
	}
	&s {
		&-0 { padding-left: 0 }
		&-1 { padding-left: ($spacer * .25) }
		&-2 { padding-left: ($spacer * .5) }
		&-3 { padding-left: $spacer }
		&-4 { padding-left: ($spacer * 1.5) }
	}
	&e {
		&-0 { padding-right: 0 }
		&-1 { padding-right: ($spacer * .25) }
		&-2 { padding-right: ($spacer * .5) }
		&-3 { padding-right: $spacer }
		&-4 { padding-right: ($spacer * 1.5) }
	}
	&x {
		&-0 { padding-left: 0; padding-right: 0; }
		&-1 { padding-left: ($spacer * .25); padding-right: ($spacer * .25); }
		&-2 { padding-left: ($spacer * .5); padding-right: ($spacer * .5); }
		&-3 { padding-left: $spacer; padding-right: $spacer; }
		&-4 { padding-left: ($spacer * 1.5); padding-right: ($spacer * 1.5); }
	}
	&y {
		&-0 { padding-top: 0; padding-bottom: 0; }
		&-1 { padding-top: ($spacer * .25); padding-bottom: ($spacer * .25); }
		&-2 { padding-top: ($spacer * .5); padding-bottom: ($spacer * .5); }
		&-3 { padding-top: $spacer; padding-bottom: $spacer; }
		&-4 { padding-top: ($spacer * 1.5); padding-bottom: ($spacer * 1.5); }
	}
}

/* Button */
.button {
	border: none;
	background-color: transparent;
	color: $black;
	transition: background-color .2s ease, color .2s ease;
	
	&-success {
		background-color: $armyGreen;
		color: $white;
	}
	&-info {
		background-color: $airforceBlue;
		color: $white;
	}
	&-light {
		background-color: $gray1;
		color: $gray5;
	}
	&-dark {
		background-color: $gray5;
		color: $white;
	}
	&:disabled {
		background-color: $gray2 !important;
		color: $white !important;
	}
}

/* Input */
input[type="date"] {
	position: relative;
	
	&::before {
		content: attr(data-placeholder);
		width: 100%;
	}
	&:focus::before,
	&:valid::before { display: none }
	
	&::-webkit-calendar-picker-indicator {
		position: absolute;
		background: transparent;
		color: transparent;
		cursor: pointer;
		height: auto;
		width: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
}
</style>