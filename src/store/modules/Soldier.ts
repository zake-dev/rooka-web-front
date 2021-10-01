import { Module } from "vuex";
import { RootState } from "@/store";

interface State {
	name: string;
	birthOfDate: Date | null;
	militaryType: string;
	enterDate: Date | null;
}

const module: Module<State, RootState> = {
	namespaced: true,
	state: {
		name: "",
		birthOfDate: null,
		militaryType: "",
		enterDate: null,
	},
	mutations: {
		setName(state, name: string) {
			state.name = name;
		},
		setBirthOfDate(state, date: Date) {
			state.birthOfDate = date;
		},
		setMilitaryType(state, type: string) {
			state.militaryType = type;
		},
		setEnterDate(state, date: Date) {
			state.enterDate = date;
		},
	},
	actions: {
		updateName({ commit }, name: string) {
			commit('setName', name);
		},
		updateBirthOfDate({ commit }, date: Date) {
			commit('setBirthOfDate', date);
		},
		updateMilitaryType({ commit }, type: string) {
			commit('setMilitaryType', type);
		},
	},
};

export default module;