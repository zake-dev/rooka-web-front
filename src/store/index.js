import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import RegisterForm from "@/store/modules/Soldier";

export default createStore({
	state: {
		appTitle: "rooka",
	},
	mutations: {},
	actions: {},
	modules: {
		registerForm: RegisterForm,
	},
	plugins: [
		createPersistedState({
			paths: ["registerForm"],
			storage: window.sessionStorage,
		}),
	],
});
