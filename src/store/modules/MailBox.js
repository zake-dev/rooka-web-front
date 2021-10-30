import Soldier from "@/store/modules/Soldier"

const module = {
	namespaced: true,
	state: () => ({
		name: "",
		birthOfDate: "",
		militaryType: "",
		enterDate: "",
		division: "",
	}),
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
		setDivision(state, division) {
			state.division = division;
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
		updateDivision({ commit }, division) {
			commit('setDivision', division);
		},
	},
	modules: {
		soldier: Soldier
	}
}

export default module