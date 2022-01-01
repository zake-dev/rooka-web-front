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
      state: '',
      createAt: '',
    },
    isBeingSent: false,
    isConfirmedToLeave: false,
    leavingRoute: '',
  },
  getters: {
    isSendable: state => {
      return (
        state.mail.author !== '' &&
        state.mail.relation !== '' &&
        state.mail.address1 !== '' &&
        state.mail.address2 !== '' &&
        state.mail.postCode !== '' &&
        state.mail.title !== '' &&
        state.mail.content !== '' &&
        !state.isBeingSend
      )
    },
  },
  mutations: {
    SET_MAIL(state, mail) {
      Object.assign(state.mail, mail)
    },
    SET_ID(state, id) {
      state.mail.id = id
    },
    SET_AUTHOR(state, author) {
      state.mail.author = author
    },
    SET_RELATION(state, relation) {
      state.mail.relation = relation
    },
    SET_ADDRESS1(state, address1) {
      state.mail.address1 = address1
    },
    SET_ADDRESS2(state, address2) {
      state.mail.address2 = address2
    },
    SET_POST_CODE(state, postCode) {
      state.mail.postCode = postCode
    },
    SET_TITLE(state, title) {
      state.mail.title = title
    },
    SET_CONTENT(state, content) {
      state.mail.content = content
    },
    SET_PASSWORD(state, password) {
      state.mail.password = password
    },
    SET_KEY(state, key) {
      state.mail.key = key
    },
    SET_STATE(state, mailState) {
      state.mail.state = mailState
    },
    SET_IS_BEING_SENT(state, isBeingSent) {
      state.isBeingSent = isBeingSent
    },
    SET_IS_CONFIRMED_TO_LEAVE(state, isConfirmedToLeave) {
      state.isConfirmedToLeave = isConfirmedToLeave
    },
    SET_LEAVING_ROUTE(state, route) {
      state.leavingRoute = route
    },
  },
  actions: {
    async SEND_MAIL({ commit, state }) {
      commit('SET_IS_BEING_SENT', true)

      try {
        await MailApi.postMail(state.mail)
        await router.push(`/${state.mail.key}/mail`)
      } catch (e) {
        console.dir(e.response)
      } finally {
        commit('SET_IS_BEING_SENT', false)
      }
    },
    UPDATE_ID({ commit }, id) {
      commit('SET_ID', id)
    },
    UPDATE_AUTHOR({ commit }, author) {
      commit('SET_AUTHOR', author)
    },
    UPDATE_RELATION({ commit }, relation) {
      commit('SET_RELATION', relation)
    },
    UPDATE_ADDRESS1({ commit }, address1) {
      commit('SET_ADDRESS1', address1)
    },
    UPDATE_ADDRESS2({ commit }, address2) {
      commit('SET_ADDRESS2', address2)
    },
    UPDATE_POST_CODE({ commit }, postCode) {
      commit('SET_POST_CODE', postCode)
    },
    UPDATE_TITLE({ commit }, title) {
      commit('SET_TITLE', title)
    },
    UPDATE_CONTENT({ commit }, content) {
      commit('SET_CONTENT', content)
    },
    UPDATE_PASSWORD({ commit }, password) {
      commit('SET_PASSWORD', password)
    },
    UPDATE_KEY({ commit }, key) {
      commit('SET_KEY', key)
    },
    UPDATE_STATE({ commit }, state) {
      commit('SET_STATE', state)
    },
    UPDATE_IS_CONFIRMED_TO_LEAVE({ commit }, isConfirmedToLeave) {
      commit('SET_IS_CONFIRMED_TO_LEAVE', isConfirmedToLeave)
    },
    UPDATE_LEAVING_ROUTE({ commit }, route) {
      commit('SET_LEAVING_ROUTE', route)
    },
  },
}

export default module
