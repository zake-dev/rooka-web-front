import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import RegisterForm from '@/store/modules/RegisterForm'
import MailBox from '@/store/modules/MailBox'
import MailView from '@/store/modules/MailView'

export default createStore({
  state: {
    isModalVisible: false,
    modalContentName: '',
    userKey: '',
  },
  getters: {
    shareLink: state => `rooka.kr/${state.userKey}`,
  },
  mutations: {
    SET_IS_MODAL_VISIBLE(state, isVisible) {
      state.isModalVisible = isVisible
    },
    SET_MODAL_CONTENT_NAME(state, name) {
      state.modalContentName = name
    },
    SET_USER_KEY(state, key) {
      state.userKey = key
    },
  },
  actions: {
    OPEN_MODAL({ commit }, modalContentName) {
      commit('SET_MODAL_CONTENT_NAME', modalContentName)
      commit('SET_IS_MODAL_VISIBLE', true)
    },
    CLOSE_MODAL({ commit }) {
      commit('SET_IS_MODAL_VISIBLE', false)
    },
    LOGIN_USER({ commit }, key) {
      commit('SET_USER_KEY', key)
    },
  },
  modules: {
    registerForm: RegisterForm,
    mailBox: MailBox,
    mailView: MailView,
  },
  plugins: [
    createPersistedState({
      paths: ['registerForm', 'mailView', 'mailBox'],
      storage: window.sessionStorage,
    }),
  ],
})
