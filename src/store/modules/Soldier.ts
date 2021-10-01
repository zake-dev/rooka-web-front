import { Module } from "vuex";
import { RootState } from "@/store";

interface State {
	name: string;
	birthOfDate: Date;
	militaryType: string;
	enterDate: Date;
}

const module: Module<State, RootState> = {
	namespaced: true,
	state: {
		name: "",
		birthOfDate: new Date(),
		militaryType: "",
		enterDate: new Date(),
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
	},
};

export default module;