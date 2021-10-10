<template>
<div class="page-wrapper">
	<LineStepper :stepper="stepper"></LineStepper>

	<transition :name="slideTransition">
		<!-- 작성 폼 (이름) -->
		<div v-if="stepper.currentStep === 1" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">훈련병의 이름은<br>무엇인가요? 😮</FormLabel>
				<div class="input-area">
					<span v-if="isInvalidName"
						  class="input-area__text--invalid font-mobile__caption"
				    >올바르지 않은 이름 형태입니다.</span>
					<FormInput type="text"
							   placeholder="이름을 입력해주세요"
							   :value="soldier.name"
							   @input="handleUpdateName"
							   @keyup.enter="handleSubmitName"
					></FormInput>
				</div>
				<div class="form-card-buttons">
					<RoundedButton class="button-dark button-lg"
								   text="다음"
								   @click="handleSubmitName"
								   :disabled="soldier.name === ''"
					></RoundedButton>	
				</div>
			</div>
		</div>

		<!-- 작성 폼 (생년월일) -->
		<div v-else-if="stepper.currentStep === 2" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">
					{{ soldier.name }} 훈련병은<br>언제 태어났나요? 🎂
				</FormLabel>
				<FormInput type="date"
						   data-placeholder="생년월일을 입력해주세요"
						   :value="soldier.birthOfDate"
						   @change="handleSubmitBirthOfDate"
						   required
				></FormInput>
				
				<div class="form-card-buttons my-3">
					<RoundedButton class="button-dark button-lg"
								   text="다음"
								   @click="handleIncreaseStep(1)"
								   :disabled="soldier.birthOfDate === ''"
					></RoundedButton>	
				</div>
			</div>

			<FormBackButton @click="handleDecreaseStep(1)"></FormBackButton>
		</div>
		
		<!-- 작성 폼 (군종) -->
		<div v-else-if="stepper.currentStep === 3" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">
					{{ soldier.name }} 훈련병의<br>군종은 무엇인가요? 🤔
				</FormLabel>
				
				<div class="form-card-buttons">
					<RoundedButton class="button-success"
								   text="육군"
								   @click="handleClickMilitaryType('육군')"
					></RoundedButton>
					<RoundedButton class="button-info"
								   text="공군"
								   @click="handleClickMilitaryType('공군')"
					></RoundedButton>
				</div>
				
				<div class="form-card-links">
					<a class="form-card-links__help-link font-mobile__caption mt-4"
				   	   @click="isModalVisible = true"
			    	>해군/해병대는 왜 없나요?</a>
				</div>
			</div>

			<FormBackButton @click="handleDecreaseStep(1)"></FormBackButton>
			
			<Modal :show="isModalVisible" @closeModal="isModalVisible = false">
				<MissingMilitaryTypeModalContent @closeModal="isModalVisible = false"
			    ></MissingMilitaryTypeModalContent>
			</Modal>
		</div>
		
		<!-- 작성 폼 (육군 - 입영부대) -->
		<div v-else-if="stepper.currentStep === 3.5" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">
					{{ soldier.name }} 훈련병의<br>입영 부대는 어디인가요? 🗺️
				</FormLabel>
				<ArmyDivisionSelect :value="soldier.division"
									@change="handleSelectDivision"
				></ArmyDivisionSelect>
				
				<div class="form-card-buttons my-3">
					<RoundedButton class="button-dark button-lg"
								   text="다음"
								   @click="handleIncreaseStep(0.5)"
								   :disabled="soldier.birthOfDate === ''"
					></RoundedButton>	
				</div>
			</div>

			<FormBackButton @click="handleDecreaseStep(0.5)"></FormBackButton>
		</div>
		
		<!-- 작성 폼 (입대일) -->
		<div v-else-if="stepper.currentStep === 4" class="form-card">
			<div class="form-card-content">
				<FormLabel class="mb-3">
					{{ soldier.name }} 훈련병의<br>입대일은 언제인가요? 🗓️
				</FormLabel>
				<FormInput class="my-2"
						   type="date"
						   data-placeholder="입대일을 입력해주세요"
						   :value="soldier.enterDate"
						   @change="handleSubmitEnterDate"
						   required
				></FormInput>
				
				<div class="form-card-buttons">
					<RoundedButton class="button-dark button-lg"
								   text="편지함 찾기"
								   @click="handleSubmitForm"
								   :disabled="soldier.enterDate === ''"
					></RoundedButton>	
				</div>
			</div>

			<FormBackButton @click="handleDecreaseStep(soldier.militaryType === '공군' ? 1 : 0.5)"></FormBackButton>
		</div>
	</transition>
</div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
	
import SoliderModule from "@/store/modules/Soldier";
import LineStepper from "@/components/Stepper/LineStepper.vue";
import FormLabel from "@/components/Form/FormLabel.vue";
import FormInput from "@/components/Form/FormInput.vue";
import ArmyDivisionSelect from "@/components/Form/ArmyDivisionSelect.vue";
import FormBackButton from "@/components/Form/FormBackButton.vue";
import RoundedButton from "@/components/Button/RoundedButton.vue";
import Modal from "@/components/Modal/Modal.vue";
import MissingMilitaryTypeModalContent from "@/components/Modal/Content/MissingMilitaryTypeModalContent.vue";

export default {
 	name: "RegisterForm",
 	components: {
		LineStepper,
		FormLabel,
		FormInput,
		ArmyDivisionSelect,
		FormBackButton,
		RoundedButton,
		Modal,
		MissingMilitaryTypeModalContent,
 	},
	setup() {
		/* Vuex */
		const store = useStore();
		const soldier = computed(() => store.state.registerForm);
		
		/* Router */
		const router = useRouter();
		
		/* Local State */
		const stepper = reactive({
			maxStep: 4,
			currentStep: 1
		});
		const slideTransition = ref("slide-left");
		const isModalVisible = ref(false);
		const isInvalidName = ref(false);
		
		/* Event Handler */
		const handleUpdateName = (event) => {
			store.dispatch('registerForm/updateName', event.target.value);
		};
		const handleSubmitName = () => {
			const isValidKoreanName = (name) => new RegExp(/^[가-힣]{2,}$/g).test(name);
			
			if (!isValidKoreanName(soldier.value.name)) {
				isInvalidName.value = true;
				return;
			}
			isInvalidName.value = false;
			handleIncreaseStep(1);
		};
		const handleSubmitBirthOfDate = (event) => {
			store.dispatch('registerForm/updateBirthOfDate', event.target.value);
			event.target.blur();
		};
		const handleClickMilitaryType = (militaryType) => {
			store.dispatch('registerForm/updateMilitaryType', militaryType);
			handleIncreaseStep(militaryType === "공군" ? 1 : 0.5);
		};
		const handleSelectDivision = (event) => {
			store.dispatch('registerForm/updateDivision', event.target.value);
		};
		const handleSubmitEnterDate = (event) => {
			store.dispatch('registerForm/updateEnterDate', event.target.value);
			event.target.blur();
		};
		const handleIncreaseStep = (amount) => {
			slideTransition.value = "slide-left";
			stepper.currentStep += amount;
		};
		const handleDecreaseStep = (amount) => {
			slideTransition.value = "slide-right";
			stepper.currentStep -= amount;
		};
		const handleSubmitForm = () => {
			router.push({ name: "RegisterCreateLink" });
		};
		
		return {
			/* Variables */ 
			soldier,
			stepper,
			slideTransition,
			isModalVisible,
			isInvalidName,
			/* Functions */
			handleUpdateName,
			handleSubmitName,
			handleSubmitBirthOfDate,
			handleClickMilitaryType,
			handleSelectDivision,
			handleSubmitEnterDate,
			handleIncreaseStep,
			handleDecreaseStep,
			handleSubmitForm,
		};
	}
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.form-card {
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 2rem;
	background-color: $white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.form-card-content {
	padding: 1.5rem 0;
}
.form-card-buttons {
	margin-top: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.form-card-links {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	&__help-link {
		text-decoration: none;
		color: $gray4;
		border-bottom: 1px solid $gray4;
	}
}
.input-area {
	height: 46px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	
	&__text {		
		&--invalid {
			padding: 0.4px 0;
			color: $rookaRed
		}
	}
}
</style>