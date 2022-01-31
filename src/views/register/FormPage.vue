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
              placeholder="이름을 입력해 주세요"
              v-model="name"
              maxlength="15"
              @keyup.enter="handleSubmitName"
            />
          </div>
          <div class="form-card-buttons">
            <BaseButton
              class="button-primary"
              @click="handleSubmitName"
              :disabled="name === ''"
              >다음</BaseButton
            >
          </div>
        </div>
      </div>

      <!-- 작성 폼 (생년월일) -->
      <div v-else-if="stepper.currentStep === 2" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ shortenName(soldier.name) }} 훈련병은<br />언제 태어났나요?
            <Emoji>🎂</Emoji>
          </FormLabel>
          <div class="input-area" @click="handleClickBirthDate">
            <span
              v-if="isInvalidBirthDate"
              class="input-area__text--invalid font__caption"
              >올바르지 않은 날짜에요!</span
            >
            <FormDateInput
              v-model="birthDate"
              placeholder="생년월일을 입력해 주세요"
              required
            />
          </div>

          <div class="form-card-buttons my-3">
            <BaseButton
              class="button-primary"
              @click="handleSubmitBirthDate"
              :disabled="!isValidDate(soldier.birthDate) || isInvalidBirthDate"
              >다음</BaseButton
            >
          </div>
        </div>

        <RegisterFormButtonBack />
      </div>

      <!-- 작성 폼 (군종) -->
      <div v-else-if="stepper.currentStep === 3" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ shortenName(soldier.name) }} 훈련병의<br />군종은 무엇인가요?
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

        <RegisterFormButtonBack />
      </div>

      <!-- 작성 폼 (입대일) -->
      <div v-else-if="stepper.currentStep === 4" class="form-card">
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ shortenName(soldier.name) }} 훈련병의<br />입대일은 언제인가요?
            <Emoji>🗓️</Emoji>
          </FormLabel>
          <FormDateInput
            v-model="enterDate"
            placeholder="입대일을 입력해 주세요"
            required
          />

          <div class="form-card-buttons my-3">
            <BaseButton
              class="button-primary"
              @click="handleIncreaseStep"
              :disabled="!isValidDate(soldier.enterDate)"
              >다음</BaseButton
            >
          </div>
        </div>

        <RegisterFormButtonBack />
      </div>

      <!-- 작성 폼 (육군 - 입영부대) -->
      <div
        v-else-if="soldier.militaryType === 'ARMY' && stepper.currentStep === 5"
        class="form-card"
      >
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ shortenName(soldier.name) }} 훈련병의<br />입영 부대는
            어디인가요?
            <Emoji>🗺️</Emoji>
          </FormLabel>
          <ArmyTrainingCenterSelect v-model="trainingCenterName" />

          <div class="form-card-buttons">
            <BaseButton
              class="button-primary"
              @click="handleSubmitForm"
              :disabled="soldier.trainingCenterName === ''"
              >편지함 찾기</BaseButton
            >
          </div>
        </div>

        <RegisterFormButtonBack />
      </div>

      <!-- 작성 폼 (공군 - 기수) -->
      <div
        v-else-if="soldier.militaryType === 'AF' && stepper.currentStep === 5"
        class="form-card"
      >
        <div class="form-card-content">
          <FormLabel class="mb-3">
            {{ shortenName(soldier.name) }} 훈련병은<br />공군 몇 기인가요?
            <Emoji>📋</Emoji>
          </FormLabel>
          <AirforceKisuSelect v-model="kisu" />

          <div class="form-card-buttons">
            <BaseButton
              class="button-primary"
              @click="handleSubmitForm"
              :disabled="soldier.kisu === ''"
              >편지함 찾기</BaseButton
            >
          </div>
        </div>

        <RegisterFormButtonBack />
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import * as MailBoxApi from '@/api/MailBoxApi'
import { openModal } from '@/utils/DialogHandler'
import { shortenName } from '@/utils/TextFormatter'

import LineStepper from '@/components/Stepper/LineStepper.vue'
import Emoji from '@/components/Decorator/Emoji'
import FormLabel from '@/components/Form/FormLabel.vue'
import FormInput from '@/components/Form/FormInput.vue'
import FormDateInput from '@/components/Form/FormDateInput.vue'
import ArmyTrainingCenterSelect from '@/components/Form/ArmyTrainingCenterSelect.vue'
import AirforceKisuSelect from '@/components/Form/AirforceKisuSelect'
import RegisterFormButtonBack from '@/components/Button/RegisterFormButtonBack.vue'
import BaseButton from '@/components/Button/BaseButton.vue'

export default {
  components: {
    LineStepper,
    Emoji,
    FormLabel,
    FormInput,
    FormDateInput,
    ArmyTrainingCenterSelect,
    AirforceKisuSelect,
    RegisterFormButtonBack,
    BaseButton,
  },
  setup() {
    /* Vuex */
    const store = useStore()
    const state = store.state.registerForm
    const slideTransition = computed(() => state.slideTransition)
    const stepper = computed(() => state.stepper)
    const soldier = state.soldier
    const name = computed({
      get: () => soldier.name,
      set: value => store.dispatch('registerForm/UPDATE_NAME', value),
    })
    const birthDate = computed({
      get: () => soldier.birthDate,
      set: value => store.dispatch('registerForm/UPDATE_BIRTH_DATE', value),
    })
    const enterDate = computed({
      get: () => soldier.enterDate,
      set: value => store.dispatch('registerForm/UPDATE_ENTER_DATE', value),
    })
    const trainingCenterName = computed({
      get: () => soldier.trainingCenterName,
      set: value =>
        store.dispatch('registerForm/UPDATE_TRAINING_CENTER_NAME', value),
    })
    const kisu = computed({
      get: () => soldier.kisu,
      set: value => store.dispatch('registerForm/UPDATE_KISU', value),
    })

    /* Router */
    const router = useRouter()

    /* Local State */
    const isInvalidName = ref(false)
    const isInvalidBirthDate = ref(false)

    /* Helper Function */
    const isValidDate = ({ year, month, date }) =>
      year !== '' && month !== '' && date !== ''

    /* Event Handler */
    const handleIncreaseStep = () =>
      store.dispatch('registerForm/INCREASE_STEP')
    const handleSubmitName = e => {
      const isValidKoreanName = name => new RegExp(/^[가-힣]{2,}$/g).test(name)

      if (!isValidKoreanName(name.value)) {
        isInvalidName.value = true
        e.target.blur()
        return
      }
      isInvalidName.value = false
      handleIncreaseStep()
    }
    const handleClickBirthDate = () => {
      if (isInvalidBirthDate.value) {
        birthDate.value = { year: '', month: '', date: '' }
        isInvalidBirthDate.value = false
        setTimeout(() => document.querySelector('.input').focus(), 1)
      }
    }
    const handleSubmitBirthDate = () => {
      const isFutureDate = ({ year, month, date }) =>
        new Date(year, month - 1, date) > new Date()

      if (isFutureDate(birthDate.value)) {
        isInvalidBirthDate.value = true
        return
      }
      handleIncreaseStep()
    }
    const handleClickMilitaryType = militaryType => {
      store.dispatch('registerForm/UPDATE_MILITARY_TYPE', militaryType)
      handleIncreaseStep()
    }
    const handleSubmitForm = async () => {
      try {
        const { data } = await MailBoxApi.getKey(soldier.value)
        store.dispatch('registerForm/RESET')
        router.push(`/${data.key}/mail`)
      } catch (e) {
        router.push({ name: 'RegisterCreateLink' })
      }
    }

    onBeforeMount(() => {
      store.dispatch('registerForm/RESET_WITHOUT_FORM')
      store.dispatch('registerForm/FETCH_TRAINING_CENTER_NAMES')
      store.dispatch('registerForm/FETCH_KISUS')
    })

    return {
      /* Variables */
      soldier,
      slideTransition,
      stepper,
      isInvalidName,
      isInvalidBirthDate,
      name,
      birthDate,
      enterDate,
      trainingCenterName,
      kisu,
      /* Functions */
      openModal,
      isValidDate,
      shortenName,
      handleSubmitName,
      handleClickBirthDate,
      handleSubmitBirthDate,
      handleClickMilitaryType,
      handleSubmitForm,
      handleIncreaseStep,
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_variables';

.form-card {
  position: absolute;
  width: 100%;
  min-height: 100%;
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
