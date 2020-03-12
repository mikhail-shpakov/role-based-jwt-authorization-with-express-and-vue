import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About/')
  },
  {
    path: '/servers',
    name: 'servers',
    component: () => import('@/pages/Servers/')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/Error404/')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
