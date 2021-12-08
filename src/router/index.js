import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/register',
  },
  {
    path: '/:key(%.+[.-_~][0-9]{4})',
    redirect: to => `/${to.params.key}/mail`,
  },
  {
    path: '/:key/mail',
    name: 'MailBox',
    component: () => import('../views/mail/MailBoxPage.vue'),
  },
  {
    path: '/:key/mail/post',
    name: 'PostMail',
    component: () => import('../views/mail/PostPage.vue'),
  },
  {
    path: '/:key/mail/:id([0-9]+)',
    component: () => import('../views/mail/DetailedPage.vue'),
  },
  {
    path: '/register',
    redirect: '/register/form',
  },
  {
    path: '/register/form',
    name: 'RegisterForm',
    component: () => import('../views/register/FormPage.vue'),
  },
  {
    path: '/register/create-link',
    name: 'RegisterCreateLink',
    component: () => import('../views/register/CreateLinkPage.vue'),
  },
  {
    path: '/register/result',
    name: 'RegisterResult',
    component: () => import('../views/register/ResultPage.vue'),
  },
  {
    path: '/error/mailbox-not-found',
    name: 'PageNotFound',
    component: () => import('../views/error/PageNotFoundPage.vue'),
  },
  {
    path: '/error/to-early-birds',
    name: 'WatingForOpen',
    component: () => import('../views/error/WatingForOpenPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error/mailbox-not-found',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
