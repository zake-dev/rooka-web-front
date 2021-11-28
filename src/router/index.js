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
    path: '/mail/post/:key',
    name: 'PostMail',
    component: () => import('../views/mail/Post.vue')
  }, {
    path: '/mail/:key/:id([0-9]+)',
    component: () => import('../views/mail/Detailed.vue')
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
    path: '/error/mailbox-not-found',
    name: 'PageNotFound',
    component: () => import('../views/error/PageNotFound.vue')
  }, {
    path: '/error/to-early-birds',
    name: 'WatingForOpen',
    component: () => import('../views/error/WatingForOpen.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/error/mailbox-not-found'
  }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
