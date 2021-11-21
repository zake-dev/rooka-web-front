import * as MailApi from '@/api/MailApi'
import router from '@/router'

const module = {
	namespaced: true,
	state: {
    mail: {
      id: null,
      name: '',
      relation: '',
      address: '',
      postCode: '',
      title: '',
      content: '',
      password: '',
      key: '',
      state: ''
    },
    isBeingSend: false    
	},
  getters: {
    isSendable: (state) => {
      return state.mail.name !== ''
          && state.mail.relation !== ''
          && state.mail.address !== ''
          && state.mail.title !== ''
          && state.mail.content !== ''
          && !state.isBeingSend
    }
  },
	mutations: {
    RESET(state) {
      Object.assign(state.mail, {
        id: null,
        name: '',
        relation: '',
        address: '',
        postCode: '',
        title: '',
        content: '',
        password: '',
        key: '',
        state: ''
      })
      state.isBeingSend = false
    },
		SET_ID(state, id) {
      state.mail.id = id
    },
    SET_NAME(state, name) {
      state.mail.name = name
    },
    SET_RELATION(state, relation) {
      state.mail.relation = relation
    },
    SET_ADDRESS(state, address) {
      state.mail.address = address
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
    SET_IS_BEING_SEND(state, isBeingSend) {
      state.isBeingSend = isBeingSend
    }
	},
	actions: {
    async FETCH_MAIL({ commit }, { id, password }) {
      // const { data } = await getMail(id, password)
    },
    async SEND_MAIL({ commit, state }) {
      commit('SET_IS_BEING_SEND', true)
      
      commit('SET_PASSWORD', '1234')
      
      try {
        await MailApi.postMail(state.mail)
        router.push(`/mail/${state.mail.key}`)
      } catch (e) {
        console.dir(e.response)
      } finally {
        commit('SET_IS_BEING_SEND', false)
      }
    },
    UPDATE_ID({ commit }, id) {
      commit('SET_ID', id)
    },
    UPDATE_NAME({ commit }, name) {
      commit('SET_NAME', name)
    },
    UPDATE_RELATION({ commit }, relation) {
      commit('SET_RELATION', relation)
    },
    UPDATE_ADDRESS({ commit }, address) {
      commit('SET_ADDRESS', address)
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
    } ,
    RESET({ commit }) {
      commit('RESET')
    }
	}
}

export default module