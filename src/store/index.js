import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import RegisterForm from '@/store/modules/RegisterForm'
import MailBox from '@/store/modules/MailBox'
import MailView from '@/store/modules/MailView'
import MailForm from '@/store/modules/MailForm'
import ToEarlyBirds from '@/store/modules/ToEarlyBirds'

export default createStore({
  state: {
    isModalVisible: false,
    modalContentName: '',
    toastNextId: 0,
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
    SHOW_TOAST(state, message) {
      const toast = state.toastList.find(toast => toast.message == message)
      if (toast) toast.resetCounter++
      else
        state.toastList.push({
          id: state.toastNextId++,
          message: message,
          resetCounter: 0,
        })
    },
    REMOVE_TOAST(state, toastId) {
      const index = state.toastList.findIndex(toast => toast.id === toastId)
      if (index >= 0) {
        state.toastList.splice(index, 1)
      }
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
    SHOW_TOAST({ commit }, message) {
      commit('SHOW_TOAST', message)
    },
    REMOVE_TOAST({ commit }, toastId) {
      commit('REMOVE_TOAST', toastId)
    },
  },
  modules: {
    registerForm: RegisterForm,
    mailBox: MailBox,
    mailView: MailView,
    mailForm: MailForm,
    toEarlyBirds: ToEarlyBirds,
  },
  plugins: [
    createPersistedState({
      paths: ['registerForm', 'mailView', 'mailBox', 'toEarlyBirds'],
      storage: window.sessionStorage,
    }),
  ],
})
