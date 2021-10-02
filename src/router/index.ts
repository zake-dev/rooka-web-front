import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "/register",
	},
	{
		path: "/register",
		redirect: "/register/form",
	},
	{
    	path: "/register/form",
    	name: "RegisterForm",
    	component: () => import("../views/register/Form.vue"),
	},
	{
    	path: "/register/create-link",
    	name: "RegisterCreateLink",
    	component: () => import("../views/register/CreateLink.vue"),
	},
	{
    	path: "/register/result",
    	name: "RegisterResult",
   		component: () => import("../views/register/Result.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
