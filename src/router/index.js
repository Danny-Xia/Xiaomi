import Vue from 'vue'
import VueRouter from 'vue-router'
import WaresDefault from '../layout/Wares_default.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'wares_default',
    component: WaresDefault,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register')
  },
  {
    path: '/NotFond',
    name: 'not_fond',
    component: () => import('@/views/NotFond')
  },
  {
    path: '*',
    redirect () {
      return '/NotFond'
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
