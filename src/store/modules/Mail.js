const module = {
	namespaced: true,
	state: {
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
  getters: {
    isSendable: (state) => {
      return state.name !== ''
          && state.relation !== ''
          && state.address !== ''
          && state.title !== ''
          && state.content !== ''
    }
  },
	mutations: {
    RESET(state) {
      Object.assign(state, {
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
    },
		SET_ID(state, id) {
      state.id = id
    },
    SET_NAME(state, name) {
      state.name = name
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
    SET_KEY(state, key) {
      state.key = key
    },
    SET_STATE(state, mailState) {
      state.state = mailState
    },
	},
	actions: {
    async FETCH_MAIL({ commit }, { id, password }) {
      // const { data } = await getMail(id, password)
    },
    async SEND_MAIL({ state }) {
      console.dir(state)
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