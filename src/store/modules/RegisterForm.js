import * as CodeApi from '@/api/CodeApi'
import * as MailBoxApi from '@/api/MailBoxApi'
import * as TextFormatter from '@/utils/TextFormatter'

const module = {
  namespaced: true,
  state: {
    key: null,
    linkImageUUID: null,
    slideTransition: 'slide-left',
    stepper: {
      maxStep: 3,
      currentStep: 1,
    },
    soldier: {
      name: '',
      birthDate: { year: null, month: null, date: null },
      militaryType: 'AF',
      enterDate: '',
      kisu: '',
    },
    selectableKisus: [],
  },
  getters: {
    isValidForm: state => {
      const { name, birthDate, enterDate, kisu } = state.soldier
      return (
        name !== '' &&
        birthDate.yaer !== '' &&
        birthDate.month !== '' &&
        birthDate.date !== '' &&
        enterDate !== '' &&
        kisu !== ''
      )
    },
    form: state => ({
      ...state.soldier,
      birthDate: TextFormatter.toInputDateString(state.soldier.birthDate),
    }),
  },
  mutations: {
    RESET(state) {
      Object.assign(state, {
        key: null,
        linkImageUUID: null,
        slideTransition: 'slide-left',
        stepper: {
          maxStep: 3,
          currentStep: 1,
        },
        soldier: {
          name: '',
          birthDate: { year: '', month: '', date: '' },
          militaryType: 'AF',
          enterDate: '',
          kisu: '',
        },
        selectableKisus: [],
      })
    },
    RESET_WITHOUT_FORM(state) {
      Object.assign(state, {
        key: '',
        slideTransition: 'slide-left',
        stepper: {
          maxStep: 3,
          currentStep: 1,
        },
      })
    },
    SET_KEY(state, key) {
      state.key = key
    },
    SET_SLIDE_TRANSITION(state, slideTransition) {
      state.slideTransition = slideTransition
    },
    SET_CURRENT_STEP(state, step) {
      state.stepper.currentStep = step
    },
    SET_NAME(state, name) {
      state.soldier.name = name
    },
    SET_BIRTH_DATE(state, date) {
      state.soldier.birthDate = date
    },
    SET_ENTER_DATE(state, date) {
      state.soldier.enterDate = date
    },
    SET_KISU(state, kisu) {
      state.soldier.kisu = kisu
    },
    SET_LINK_IMAGE_UUID(state, linkImageUUID) {
      state.linkImageUUID = linkImageUUID
    },
    SET_SELECTABLE_KISUS(state, kisus) {
      state.selectableKisus = kisus
    },
  },
  actions: {
    async FETCH_KISUS({ commit }) {
      const { data } = await CodeApi.getAirforceKisus()
      commit('SET_SELECTABLE_KISUS', data)
    },
    async SUBMIT_FORM({ getters, dispatch }) {
      const { data } = await MailBoxApi.postKey(getters.form)
      dispatch('UPDATE_KEY', data.key)
    },
    INCREASE_STEP({ state, commit }) {
      commit('SET_SLIDE_TRANSITION', 'slide-left')
      commit('SET_CURRENT_STEP', state.stepper.currentStep + 1)
    },
    DECREASE_STEP({ state, commit }) {
      commit('SET_SLIDE_TRANSITION', 'slide-right')
      commit('SET_CURRENT_STEP', state.stepper.currentStep - 1)
    },
    UPDATE_KEY({ commit }, key) {
      commit('SET_KEY', key)
    },
    UPDATE_NAME({ commit }, name) {
      commit('SET_NAME', name)
    },
    UPDATE_BIRTH_DATE({ commit }, date) {
      commit('SET_BIRTH_DATE', date)
    },
    UPDATE_ENTER_DATE({ commit }, date) {
      commit('SET_ENTER_DATE', date)
    },
    UPDATE_KISU({ commit }, kisu) {
      commit('SET_KISU', kisu)
    },
    UPDATE_LINK_IMAGE_UUID({ commit }, linkImageUUID) {
      commit('SET_LINK_IMAGE_UUID', linkImageUUID)
    },
    RESET({ commit }) {
      commit('RESET')
    },
    RESET_WITHOUT_FORM({ commit }) {
      commit('RESET_WITHOUT_FORM')
    },
  },
}

export default module
