import {
  createRouter,
  createWebHistory,
  RouteLocation,
  RouteRecordRaw,
} from "vue-router";
import FormCreateUser from "../views/CreateView.vue";
import LateralBar from "../views/HomeView.vue";

//logica de autenticação pro rota, nativa do vue-router
const authGuard = () => (to: RouteLocation, from: RouteLocation, next:any) => {
  //esta checando se meu token foi armazenado no localstorage (dps ele fica no state)
  if (localStorage.getItem("token") || "") {
    next();
  } else {
    next("/");
  }
};

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "loginVue" */ "../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "home",
    beforeEnter: authGuard(),
    component: LateralBar,
  },
  {
    path: "/cadastro",
    name: "CreateView",
    beforeEnter: authGuard(),
    component: FormCreateUser,
  },
  {
    path: "/atualizar/:id",
    name: "UpdateView",
    beforeEnter: authGuard(),
    component: () =>
      import(/* webpackChunkName: "updateView" */ "../views/UpdateView.vue"),
  },
  {
    path: "/Dashboard",
    name: "DashBoardView",
    beforeEnter: authGuard(),
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/DashBoardView.vue"),
  },
  {
    path: "/modal",
    name: "modal",
    beforeEnter: authGuard(),
    component: () =>
    import(/* webpackChunkName: "Dashboard" */ "../components/MyModal.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    if (localStorage.getItem("token")) return next("/dashboard");
  }

  next();
});

export default router;
