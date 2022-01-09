import * as MailApi from '@/api/MailApi'

const module = {
  namespaced: true,
  state: {
    mail: {
      id: null,
      author: '',
      relation: '',
      address: '',
      postCode: '',
      title: '',
      content: '',
      status: '',
      createAt: '',
      imageUUID: '',
    },
  },
  mutations: {
    RESET(state) {
      Object.assign(state.mail, {
        id: null,
        author: '',
        relation: '',
        address: '',
        postCode: '',
        title: '',
        content: '',
        status: '',
        createAt: '',
        imageUUID: '',
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
