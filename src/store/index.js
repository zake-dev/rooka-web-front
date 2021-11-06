import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import RegisterForm from '@/store/modules/Soldier'

export default createStore({
	state: {
		isModalVisible: false,
		modalContentName: '',
	},
	mutations: {
		SET_IS_MODAL_VISIBLE(state, isVisible) {
			state.isModalVisible = isVisible
		},
		SET_MODAL_CONTENT_NAME(state, name) {
			state.modalContentName = name
		}
	},
	actions: {
		OPEN_MODAL({ commit }, modalContentName) {
			commit('SET_MODAL_CONTENT_NAME', modalContentName)
			commit('SET_IS_MODAL_VISIBLE', true)
		},
		CLOSE_MODAL({ commit }) {
			commit('SET_IS_MODAL_VISIBLE', false)
		}
	},
	modules: {
		registerForm: RegisterForm
	},
	plugins: [
		createPersistedState({
			paths: ["registerForm"],
			storage: window.sessionStorage
		})
	]
})
