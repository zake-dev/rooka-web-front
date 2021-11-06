import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/register'
	},
	{
		path: '/:key(%.+[.-_~][0-9]{4})',
		redirect: to => `/mail/${to.params.key}`
	}, {
		path: '/mail/:key',
		name: 'MailBox',
		component: () => import('../views/mail/MailBox.vue')
	}, {
		path: '/register',
		redirect: '/register/form',
	}, {
    path: '/register/form',
    name: 'RegisterForm',
    component: () => import('../views/register/Form.vue')
	}, {
    path: '/register/create-link',
    name: 'RegisterCreateLink',
    component: () => import('../views/register/CreateLink.vue')
	}, {
    path: '/register/result',
    name: 'RegisterResult',
    component: () => import('../views/register/Result.vue')
	}, {
    path: '/error/404',
    name: 'PageNotFound',
    component: () => import('../views/error/PageNotFound.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/error/404'
  }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
