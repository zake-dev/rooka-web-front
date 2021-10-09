const module = {
	namespaced: true,
	state: {
		name: "",
		birthOfDate: "",
		militaryType: "",
		enterDate: "",
	},
	mutations: {
		setName(state, name) {
			state.name = name;
		},
		setBirthOfDate(state, date) {
			state.birthOfDate = date;
		},
		setMilitaryType(state, type) {
			state.militaryType = type;
		},
		setEnterDate(state, date) {
			state.enterDate = date;
		},
	},
	actions: {
		updateName({ commit }, name) {
			commit('setName', name);
		},
		updateBirthOfDate({ commit }, date) {
			commit('setBirthOfDate', date);
		},
		updateMilitaryType({ commit }, type) {
			commit('setMilitaryType', type);
		},
		updateEnterDate({ commit }, date) {
			commit('setEnterDate', date);
		},
	},
};

export default module;