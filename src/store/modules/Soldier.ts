import { Module } from "vuex";
import { RootState } from "@/store";

interface State {
	name: string;
	birthOfDate: string;
	militaryType: string;
	enterDate: string;
}

const module: Module<State, RootState> = {
	namespaced: true,
	state: {
		name: "",
		birthOfDate: "",
		militaryType: "",
		enterDate: "",
	},
	mutations: {
		setName(state, name: string) {
			state.name = name;
		},
		setBirthOfDate(state, date: string) {
			state.birthOfDate = date;
		},
		setMilitaryType(state, type: string) {
			state.militaryType = type;
		},
		setEnterDate(state, date: string) {
			state.enterDate = date;
		},
	},
	actions: {
		updateName({ commit }, name: string) {
			commit('setName', name);
		},
		updateBirthOfDate({ commit }, date: string) {
			commit('setBirthOfDate', date);
		},
		updateMilitaryType({ commit }, type: string) {
			commit('setMilitaryType', type);
		},
		updateEnterDate({ commit }, date: string) {
			commit('setEnterDate', date);
		},
	},
};

export default module;