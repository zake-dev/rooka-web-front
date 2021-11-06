<template>
	<div v-if="!isErrorPage" class="app-bar">
		<Logo class="mx-4 my-3"></Logo>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Logo from '@/components/Logo/Logo.vue'

export default {
	components: {
		Logo
	},
  setup() {
    /* Router */
    const route = useRoute()
    
    /* Local State */
    const isErrorPage = computed(() => route.path.includes('/error/'))
    
    return {
      isErrorPage
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.app-bar {
	width: 100%;
	height: $appBarHeight;
	display: flex;
	justify-content: space-between;
	
	&__button {
		font-size: 20px;
	}
}
</style>