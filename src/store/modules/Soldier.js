const module = {
	namespaced: true,
	state: {
		name: "",
		birthDate: "",
		militaryType: "",
		enterDate: "",
		trainingCenterName: "",
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
	},
};

export default module;