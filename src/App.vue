<template>
	<MobileLayout></MobileLayout>
	<Modal></Modal>
</template>

<script>
import MobileLayout from "@/components/Layout/MobileLayout.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
 	name: "App",
	components: {
		MobileLayout,
		Modal,
	},
};
</script>


<style lang="scss">
@import "@/scss/global.scss";
</style>