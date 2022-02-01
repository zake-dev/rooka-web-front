import { createRouter, createWebHistory } from 'vue-router'
import { publicPath } from '@/../vue.config'
import store from '@/store'

const checkFormBeforeRouteEnter = (to, from, next) => {
  const isValidForm = store.getters['registerForm/isValidForm']
  isValidForm ? next() : next('/register/form')
}

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainPage.vue'),
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
    beforeEnter: checkFormBeforeRouteEnter,
  },
  {
    path: '/register/terms-and-conditions',
    name: 'TermsAndConditions',
    component: () => import('../views/register/TermsAndConditionsPage.vue'),
    beforeEnter: checkFormBeforeRouteEnter,
  },
  {
    path: '/register/result',
    name: 'RegisterResult',
    component: () => import('../views/register/ResultPage.vue'),
    beforeEnter: checkFormBeforeRouteEnter,
  },
  {
    path: '/error/mailbox-not-found',
    name: 'PageNotFound',
    component: () => import('../views/error/NotFoundPage.vue'),
  },
  {
    path: '/error/to-early-birds',
    name: 'WaitingForOpen',
    component: () => import('../views/error/WatingForOpenPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error/mailbox-not-found',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: publicPath,
  routes,
})

export default router
