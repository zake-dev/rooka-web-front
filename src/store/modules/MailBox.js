import * as MaildBoxApi from '@/api/MailBoxApi'
import router from '@/router'

const module = {
  namespaced: true,
  state: {
    isLoaded: false,
    key: null,
    linkImageUUID: null,
    status: '',
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
    mails: [],
  },
  mutations: {
    RESET(state) {
      Object.assign(state, {
        isLoaded: false,
        key: null,
        linkImageUUID: null,
        status: '',
        expectedMailBoxOpeningDateTime: null,
        soldier: {
          militaryType: '',
          name: '',
          birthDate: '',
          trainingCenterDetail: '',
          enterDate: '',
          trainingCenterName: '',
          kisu: 0,
        },
        mails: [],
      })
    },
    SET_CONTEXT(state, context) {
      Object.assign(state, context)
    },
    SET_IS_LOADED(state, isLoaded) {
      state.isLoaded = isLoaded
    },
  },
  actions: {
    RESET({ commit }) {
      commit('RESET')
    },
    async FETCH_CONTEXT({ commit }, key) {
      commit('RESET')
      try {
        const { data } = await MaildBoxApi.getContext(key)
        commit('SET_CONTEXT', data)
        commit('SET_IS_LOADED', true)
      } catch (e) {
        switch (e.response.status) {
          case 404:
            router.replace({ name: 'PageNotFound' })
            break
        }
      }
    },
  },
}

export default module
