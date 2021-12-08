<template>
  <div class="page-wrapper">
    <LineStepper :stepper="stepper" />

    <transition :name="slideTransition">
      <!-- 작성 폼 (이름) -->
      <div v-if="stepper.currentStep === 1" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3"
            >훈련병의 이름은<br />무엇인가요?
            <Emoji>😮</Emoji>
          </FormLabel>
          <div class="input-area">
            <span
              v-if="isInvalidName"
              class="input-area__text--invalid font__caption"
              >올바르지 않은 이름 형태에요!</span
            >
            <FormInput
              type="text"
              placeholder="이름을 입력해주세요"
              :value="soldier.name"
              @input="handleUpdateName"
              @keyup.enter="handleSubmitName"
            />
          </div>
          <div class="form-card-buttons">
            <BaseButton
              class="button-primary"
              @click="handleSubmitName"
              :disabled="soldier.name === ''"
              >다음</BaseButton
            >
          </div>
        </div>
      </div>

      <!-- 작성 폼 (생년월일) -->
      <div v-else-if="stepper.currentStep === 2" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ soldier.name }} 훈련병은<br />언제 태어났나요?
            <Emoji>🎂</Emoji>
          </FormLabel>
          <FormInput
            type="date"
            data-placeholder="생년월일을 입력해주세요"
            :value="soldier.birthDate"
            @change="handleSubmitBirthDate"
            required
          />

          <div class="form-card-buttons my-3">
            <BaseButton
              class="button-primary"
              @click="handleIncreaseStep"
              :disabled="soldier.birthDate === ''"
              >다음</BaseButton
            >
          </div>
        </div>

        <FormButtonBack />
      </div>

      <!-- 작성 폼 (군종) -->
      <div v-else-if="stepper.currentStep === 3" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ soldier.name }} 훈련병의<br />군종은 무엇인가요?
            <Emoji>🤔</Emoji>
          </FormLabel>

          <div class="form-card-buttons form-card-buttons__military-type">
            <BaseButton
              class="button-green"
              @click="handleClickMilitaryType('ARMY')"
              >육군</BaseButton
            >
            <BaseButton
              class="button-blue"
              @click="handleClickMilitaryType('AF')"
              >공군</BaseButton
            >
          </div>

          <div class="form-card-links">
            <a
              class="form-card-links__help-link font__caption"
              @click="openModal('MissingMilitaryType')"
              >해군/해병대는 왜 없나요?</a
            >
          </div>
        </div>

        <FormButtonBack />
      </div>

      <!-- 작성 폼 (입대일) -->
      <div v-else-if="stepper.currentStep === 4" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ soldier.name }} 훈련병의<br />입대일은 언제인가요?
            <Emoji>🗓️</Emoji>
          </FormLabel>
          <FormInput
            type="date"
            data-placeholder="입대일을 입력해주세요"
            :value="soldier.enterDate"
            @change="handleSubmitEnterDate"
            required
          />

          <div class="form-card-buttons my-3">
            <BaseButton
              class="button-primary"
              @click="handleIncreaseStep"
              :disabled="soldier.enterDate === ''"
              >다음</BaseButton
            >
          </div>
        </div>

        <FormButtonBack />
      </div>

      <!-- 작성 폼 (육군 - 입영부대) -->
      <div
        v-else-if="soldier.militaryType === 'ARMY' && stepper.currentStep === 5"
        class="form-card"
      >
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ soldier.name }} 훈련병의<br />입영 부대는 어디인가요?
            <Emoji>🗺️</Emoji>
          </FormLabel>
          <ArmyTrainingCenterSelect
            :value="soldier.trainingCenterName"
            @change="handleSelectTrainingCenterName"
          />

          <div class="form-card-buttons">
            <BaseButton
              class="button-primary"
              @click="handleSubmitForm"
              :disabled="soldier.trainingCenterName === ''"
              >편지함 찾기</BaseButton
            >
          </div>
        </div>

        <FormButtonBack />
      </div>

      <!-- 작성 폼 (공군 - 기수) -->
      <div
        v-else-if="soldier.militaryType === 'AF' && stepper.currentStep === 5"
        class="form-card"
      >
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ soldier.name }} 훈련병은<br />공군 몇 기인가요?
            <Emoji>📋</Emoji>
          </FormLabel>
          <AirforceKisuSelect
            :value="soldier.kisu"
            @change="handleSelectKisu"
          />

          <div class="form-card-buttons">
            <BaseButton
              class="button-primary"
              @click="handleSubmitForm"
              :disabled="soldier.kisu === ''"
              >편지함 찾기</BaseButton
            >
          </div>
        </div>

        <FormButtonBack />
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { openModal } from '@/utils/DialogHandler'
import * as MailBoxApi from '@/api/MailBoxApi'

import LineStepper from '@/components/Stepper/LineStepper.vue'
import Emoji from '@/components/Decorator/Emoji'
import FormLabel from '@/components/Form/FormLabel.vue'
import FormInput from '@/components/Form/FormInput.vue'
import ArmyTrainingCenterSelect from '@/components/Form/ArmyTrainingCenterSelect.vue'
import AirforceKisuSelect from '@/components/Form/AirforceKisuSelect'
import FormButtonBack from '@/components/Button/FormButtonBack.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    LineStepper,
    Emoji,
    FormLabel,
    FormInput,
    ArmyTrainingCenterSelect,
    AirforceKisuSelect,
    FormButtonBack,
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const state = store.state.registerForm
    const slideTransition = computed(() => state.slideTransition)
    const stepper = computed(() => state.stepper)
    const soldier = computed(() => state.soldier)

    /* Router */
    const router = useRouter()

    /* Local State */
    const isInvalidName = ref(false)

    /* Event Handler */
    const handleUpdateName = event => {
      store.dispatch('registerForm/UPDATE_NAME', event.target.value)
    }
    const handleSubmitName = event => {
      const isValidKoreanName = name => new RegExp(/^[가-힣]{2,}$/g).test(name)

      if (!isValidKoreanName(soldier.value.name)) {
        isInvalidName.value = true
        event.target.blur()
        return
      }
      isInvalidName.value = false
      store.dispatch('registerForm/INCREASE_STEP')
    }
    const handleSubmitBirthDate = event => {
      store.dispatch('registerForm/UPDATE_BIRTH_DATE', event.target.value)
      event.target.blur()
    }
    const handleClickMilitaryType = militaryType => {
      store.dispatch('registerForm/UPDATE_MILITARY_TYPE', militaryType)
      store.dispatch('registerForm/INCREASE_STEP')
    }
    const handleSubmitEnterDate = event => {
      store.dispatch('registerForm/UPDATE_ENTER_DATE', event.target.value)
      event.target.blur()
    }
    const handleSelectTrainingCenterName = event => {
      store.dispatch(
        'registerForm/UPDATE_TRAINING_CENTER_NAME',
        event.target.value,
      )
    }
    const handleSelectKisu = event => {
      store.dispatch('registerForm/UPDATE_KISU', event.target.value)
      event.target.blur()
    }
    const handleSubmitForm = async () => {
      try {
        const { data } = await MailBoxApi.getKey(soldier.value)
        router.push(`/${data}/mail`)
      } catch (e) {
        router.push({ name: 'RegisterCreateLink' })
      }
    }
    const handleIncreaseStep = () =>
      store.dispatch('registerForm/INCREASE_STEP')

    onMounted(() => store.dispatch('registerForm/RESET_WITHOUT_FORM'))

    return {
      /* Variables */
      soldier,
      slideTransition,
      stepper,
      isInvalidName,
      /* Functions */
      openModal,
      handleUpdateName,
      handleSubmitName,
      handleSubmitBirthDate,
      handleClickMilitaryType,
      handleSubmitEnterDate,
      handleSelectTrainingCenterName,
      handleSelectKisu,
      handleSubmitForm,
      handleIncreaseStep,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables.scss';

.form-card {
  position: absolute;
  width: 100%;
  min-height: calc(100% - 2px);
  padding: 32px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-card-content {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.form-card-buttons {
  margin-top: 56px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;

  &__military-type {
    margin: 0;
    padding: 0;
  }
}
.form-card-links {
  display: flex;
  flex-direction: row;
  justify-content: center;

  &__help-link {
    margin-top: 32px;
    text-decoration: none;
    color: $gray4;
    border-bottom: 1px solid $gray4;
  }
}
.input-area {
  position: relative;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;

  &__text {
    &--invalid {
      position: absolute;
      bottom: -1.25rem;
      right: 0;
      color: $warningRed;
    }
  }
}
</style>
