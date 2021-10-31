const module = {
	namespaced: true,
	state: {
		name: "",
		birthDate: "",
		militaryType: "",
		enterDate: "",
		trainingCenterName: "",
    key: "",
	},
	mutations: {
		setName(state, name) {
			state.name = name;
		},
		setBirthDate(state, date) {
			state.birthDate = date;
		},
		setMilitaryType(state, type) {
			state.militaryType = type;
		},
		setEnterDate(state, date) {
			state.enterDate = date;
		},
		setTrainingCenterName(state, trainingCenterName) {
			state.trainingCenterName = trainingCenterName;
		},
    setKey(state, key) {
      state.key = key;
    },
	},
	actions: {
		updateName({ commit }, name) {
			commit('setName', name);
		},
		updateBirthDate({ commit }, date) {
			commit('setBirthDate', date);
		},
		updateMilitaryType({ commit }, type) {
			commit('setMilitaryType', type);
		},
		updateEnterDate({ commit }, date) {
			commit('setEnterDate', date);
		},
		updateTrainingCenterName({ commit }, trainingCenterName) {
			commit('setTrainingCenterName', trainingCenterName);
		},
    updateKey({ commit }, key) {
      commit('setKey', key);
    }
	},
};

export default module;