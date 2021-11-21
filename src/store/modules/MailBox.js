import * as MaildBoxApi from '@/api/MailBoxApi'
import router from '@/router'

const module = {
	namespaced: true,
	state: {
    isLoaded: false,
    key: '',
    state: '',
    soldier: {
      militaryType: '',
      name: '',
      birthDate: '',
      trainingCenterDetail: '',
      enterDate: '',
      trainingCenterName: '',
      kisu: 0
    },
    mails: []
	},
	mutations: {
    RESET(state) {
      Object.assign(state, {
        isLoaded: false,
        key: '',
        state: '',
        soldier: {
          militaryType: '',
          name: '',
          birthDate: '',
          trainingCenterDetail: '',
          enterDate: '',
          trainingCenterName: '',
          kisu: 0
        },
        mails: []
      })
    },
		SET_CONTEXT(state, context) {
      Object.assign(state, context)
    },
    SET_IS_LOADED(state, isLoaded) {
      state.isLoaded = isLoaded
    }
	},
	actions: {
    RESET({ commit }) {
      commit('RESET')
    },
    async FETCH_CONTEXT({ commit }, key) {
      try {
        const { data } = await MaildBoxApi.getContext(key)
        commit('SET_CONTEXT', data)
        commit('SET_IS_LOADED', true)
      } catch (e) {
        switch (e.response.status) {
          case 403:
            router.push({ name: 'WatingForOpen' })
            break
          case 404:
            router.push({ name: 'PageNotFound' })
            break
        }
      }
    }
	}
}

export default module