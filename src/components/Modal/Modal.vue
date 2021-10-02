<template>
	<transition name="fade">
		<div v-if="show" class="modal-wrapper">
			<div class="modal__dismiss-area"
				 @click="handleDismiss"
			></div>

			<transition name="pop" appear>
				<div class="modal-card">
					<slot></slot>	
				</div>
			</transition>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
 	name: "Modal",
	props: {
		show: Boolean,
	},
	emits: ['closeModal'],
	setup(props, { emit }) {
		const handleDismiss = () => emit('closeModal');
		
		return {
			handleDismiss,
		};
	},
});
</script>

<style scoped lang="scss">
.modal-wrapper {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 9997;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.modal__dismiss-area {
	position: absolute;
	z-index: 9998;
	height: 100%;
	width: 100%;
	background-color: #00000070;
	backdrop-filter: blur(2px);
}
.modal-card {
	position: absolute;
	z-index: 9999;
	height: fit-content;
	width: calc(100% - 2rem);
	background: #FFFFFF;
	box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
	border-radius: 7px;
	padding: 1.7rem;
}
</style>