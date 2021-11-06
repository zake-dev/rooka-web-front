const module = {
	namespaced: true,
	state: {
		name: '',
		birthDate: '',
		militaryType: '',
		enterDate: '',
		trainingCenterName: '',
    kisu: '',
    key: '',
	},
	mutations: {
		SET_NAME(state, name) {
			state.name = name
		},
		SET_BIRTH_DATE(state, date) {
			state.birthDate = date
		},
		SET_MILITARY_TYPE(state, type) {
			state.militaryType = type
		},
		SET_ENTER_DATE(state, date) {
			state.enterDate = date
		},
		SET_TRAINING_CENTER_NAME(state, trainingCenterName) {
			state.trainingCenterName = trainingCenterName
		},
    SET_KISU(state, kisu) {
      state.kisu = kisu
    },
    SET_KEY(state, key) {
      state.key = key
    }
	},
	actions: {
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
		UPDATE_TRAINING_CENTER_NAME({ commit }, trainingCenterName) {
			commit('SET_TRAINING_CENTER_NAME', trainingCenterName)
		},
    UPDATE_KISU({ commit }, kisu) {
      commit('SET_KISU', kisu)
    },
    UPDATE_KEY({ commit }, key) {
      commit('SET_KEY', key)
    }
	}
}

export default module