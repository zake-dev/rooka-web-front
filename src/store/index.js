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
    SHOW_TOAST(state, { message, type }) {
      const toast = state.toastList.find(toast => toast.message == message)
      if (toast) toast.resetCounter++
      else
        state.toastList.push({
          id: state.toastNextId++,
          type: type,
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
    REMOVE_TOAST_BY_MESSAGE(state, message) {
      const index = state.toastList.findIndex(
        toast => toast.message === message,
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
    SHOW_TOAST({ commit }, message) {
      commit('SHOW_TOAST', { message })
    },
    SHOW_WARNING_TOAST({ commit }, message) {
      commit('SHOW_TOAST', { message, type: 'warning' })
    },
    REMOVE_TOAST({ commit }, toastId) {
      commit('REMOVE_TOAST', toastId)
    },
    REMOVE_TOAST_BY_MESSAGE({ commit }, message) {
      commit('REMOVE_TOAST_BY_MESSAGE', message)
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
    toEarlyBirds: ToEarlyBirds,
  },
  plugins: [
    createPersistedState({
      paths: ['registerForm', 'mailView', 'mailBox', 'toEarlyBirds'],
      storage: window.sessionStorage,
    }),
  ],
})
