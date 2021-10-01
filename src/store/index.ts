import { createStore } from "vuex";

export interface RootState {
	appTitle: string;
}

export default createStore({
	state: {
		appTitle: "rooka",
	},
	mutations: {},
	actions: {},
	modules: {},
});
