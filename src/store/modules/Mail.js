const module = {
	namespaced: true,
	state: {
    id: null,
		author: '',
    relation: '',
    address: '',
    postCode: '',
    title: '',
    content: '',
    password: '',
    receiverKey: '',
    state: ''
	},
	mutations: {
		SET_ID(state, id) {
      state.id = id
    },
    SET_AUTHOR(state, author) {
      state.author = author
    },
    SET_RELATION(state, relation) {
      state.relation = relation
    },
    SET_ADDRESS(state, address) {
      state.address = address
    },
    SET_POST_CODE(state, postCode) {
      state.postCode = postCode
    },
    SET_TITLE(state, title) {
      state.title = title
    },
    SET_CONTENT(state, content) {
      state.content = content
    },
    SET_PASSWORD(state, password) {
      state.password = password
    },
    SET_RECEIVER_KEY(state, receiverKey) {
      state.receiverKey = receiverKey
    },
    SET_STATE(state, mailState) {
      state.state = mailState
    },
	},
	actions: {
    async FETCH_MAIL({ commit }, { id, password }) {
      // const { data } = await getMail(id, password)
    },
    UPDATE_ID({ commit }, id) {
      commit('SET_ID', id)
    },
    UPDATE_AUTHOR({ commit }, author) {
      commit('SET_AUTHOR', author)
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
    UPDATE_RECEIVER_KEY({ commit }, receiverKey) {
      commit('SET_RECEIVER_KEY', receiverKey)
    },
    UPDATE_STATE({ commit }, state) {
      commit('SET_STATE', state)
    } ,
    RESET({ commit }) {
      commit('SET_ID', null)
      commit('SET_AUTHOR', '')
      commit('SET_RELATION', '')
      commit('SET_ADDRESS', '')
      commit('SET_POST_CODE', '')
      commit('SET_TITLE', '')
      commit('SET_CONTENT', '')
      commit('SET_PASSWORD', '')
      commit('SET_RECEIVER_KEY', '')
      SET_STATE('SET_STATE', '')
    }
	}
}

export default module