const module = {
  namespaced: true,
  state: {
    key: null,
    linkImageUUID: null,
    expectedMailBoxOpeningDateTime: null,
    soldier: {
      name: '',
      birthDate: '',
      militaryType: '',
      enterDate: '',
      kisu: '',
      trainingCenterName: '',
      trainingCenterDetail: '',
    },
  },
  mutations: {
    RESET(state) {
      Object.assign(state, {
        key: null,
        linkImageUUID: null,
        expectedMailBoxOpeningDateTime: null,
        soldier: {
          name: '',
          birthDate: '',
          militaryType: '',
          enterDate: '',
          kisu: '',
          trainingCenterName: '',
          trainingCenterDetail: '',
        },
      })
    },
    SET_CONTEXT(state, context) {
      Object.assign(state, context)
    },
  },
  actions: {
    UPDATE_CONTEXT({ commit }, context) {
      commit('SET_CONTEXT', context)
    },
  },
}

export default module
