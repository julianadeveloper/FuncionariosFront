import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LateralBar from '../views/HomeView.vue'
import FormCreateUser from '../components/FormCreateUser.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "loginVue" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: LateralBar,
  },
  {
    path: '/createuser',
    name: 'CreateUser',
    component: FormCreateUser
      

  },
  {
    path: '/UpdateUser',
    name: 'UpdateUser',
    component: () => import(/* webpackChunkName: "updateUser" */ '../components/UpdateUser.vue')
  },
  {
    path: '/panel',
    name: 'panel',
   component: () => import(/* webpackChunkName: "CardUser" */ '../components/CardUser.vue')  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
