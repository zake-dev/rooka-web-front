import * as MailApi from '@/api/MailApi'
import router from '@/router'

const module = {
  namespaced: true,
  state: {
    mail: {
      id: null,
      author: '',
      relation: '',
      address1: '',
      address2: '',
      postCode: '',
      title: '',
      content: '',
      password: '',
      key: '',
      status: '',
      createAt: '',
    },
  },
  mutations: {
    RESET(state) {
      Object.assign(state.mail, {
        id: null,
        author: '',
        relation: '',
        address1: '',
        address2: '',
        postCode: '',
        title: '',
        content: '',
        password: '',
        key: '',
        status: '',
        createAt: '',
      })
    },
    SET_MAIL(state, mail) {
      Object.assign(state.mail, mail)
    },
    SET_ID(state, id) {
      state.mail.id = id
    },
  },
  actions: {
    async FETCH_MAIL({ commit, state }, password) {
      const { data } = await MailApi.getMail(state.mail.id, password)
      commit('SET_MAIL', data)
    },
    async DELETE_MAIL({ commit, state }, password) {
      await MailApi.deleteMail(state.mail.id, password)
    },
    UPDATE_ID({ commit }, id) {
      commit('SET_ID', id)
    },
    RESET({ commit }) {
      commit('RESET')
    },
  },
}

export default module
