import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import RegisterForm from '@/store/modules/RegisterForm'
import MailBox from '@/store/modules/MailBox'
import MailView from '@/store/modules/MailView'
import MailForm from '@/store/modules/MailForm'

export default createStore({
  state: {
    isModalVisible: false,
    modalContentName: '',
    toastList: [],
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
    SHOW_NEW_TOAST(state, content) {
      const newId =
        1 +
        state.toastList.reduce(
          (maxId, toastContent) => Math.max(maxId, toastContent.toastId),
          0,
        )
      content.toastId = newId
      state.toastList.push(content)
    },
    REMOVE_TOAST(state, toastId) {
      const index = state.toastList.findIndex(
        toastContent => toastContent.toastId === toastId,
      )
      if (index >= 0) {
        state.toastList.splice(index, 1)
      }
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
    SHOW_TOAST({ commit }, toastContent) {
      commit('SHOW_NEW_TOAST', toastContent)
      setTimeout(() => commit('REMOVE_TOAST', toastContent.toastId), 3000)
    },
    REMOVE_TOAST({ commit }, toastId) {
      commit('REMOVE_TOAST', toastId)
    },
    LOGIN_USER({ commit }, key) {
      commit('SET_USER_KEY', key)
    },
  },
  modules: {
    registerForm: RegisterForm,
    mailBox: MailBox,
    mailView: MailView,
    mailForm: MailForm,
  },
  plugins: [
    createPersistedState({
      paths: ['registerForm', 'mailView', 'mailBox'],
      storage: window.sessionStorage,
    }),
  ],
})
