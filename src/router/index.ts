import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LateralBar from '../views/HomeView.vue'
import LoginUser from '../views/LoginView.vue'
import CardUser from '../components/CardUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: LateralBar
  },
  {
    path: '/panel',
    name: 'panel',
   component: () => import(/* webpackChunkName: "about" */ '../components/CardUser.vue')  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
