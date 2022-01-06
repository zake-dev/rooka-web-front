const module = {
  namespaced: true,
  state: {
    key: '',
    slideTransition: 'slide-left',
    stepper: {
      maxStep: 5,
      currentStep: 1,
    },
    soldier: {
      name: '',
      birthDate: '',
      militaryType: '',
      enterDate: '',
      kisu: '',
      trainingCenterName: '',
    },
  },
  mutations: {
    RESET(state) {
      Object.assign(state, {
        key: '',
        slideTransition: 'slide-left',
        stepper: {
          maxStep: 5,
          currentStep: 1,
        },
        soldier: {
          name: '',
          birthDate: '',
          militaryType: '',
          enterDate: '',
          kisu: '',
          trainingCenterName: '',
        },
      })
    },
    RESET_WITHOUT_FORM(state) {
      Object.assign(state, {
        key: '',
        slideTransition: 'slide-left',
        stepper: {
          maxStep: 5,
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
    SET_MILITARY_TYPE(state, type) {
      state.soldier.militaryType = type
    },
    SET_ENTER_DATE(state, date) {
      state.soldier.enterDate = date
    },
    SET_KISU(state, kisu) {
      state.soldier.kisu = kisu
    },
    SET_TRAINING_CENTER_NAME(state, trainingCenterName) {
      state.soldier.trainingCenterName = trainingCenterName
    },
  },
  actions: {
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
    UPDATE_MILITARY_TYPE({ commit }, type) {
      commit('SET_MILITARY_TYPE', type)
    },
    UPDATE_ENTER_DATE({ commit }, date) {
      commit('SET_ENTER_DATE', date)
    },
    UPDATE_KISU({ commit }, kisu) {
      commit('SET_KISU', kisu)
    },
    UPDATE_TRAINING_CENTER_NAME({ commit }, trainingCenterName) {
      commit('SET_TRAINING_CENTER_NAME', trainingCenterName)
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
