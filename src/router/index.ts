import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  useRoute,
} from "vue-router";
import FormCreateUser from "../views/CreateView.vue";
import LateralBar from "../views/HomeView.vue";

//logica de autenticação pro rota, nativa do vue-router
const authGuard = () => (to: any, from: any, next: any) => {
  //esta checando se meu token foi armazenado no localstorage (dps ele fica no state)
  if (localStorage.getItem("token") || "") {
    next();
  } else {
    next("/");
  }
};

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
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
    path: "/panel",
    name: "panel",
    beforeEnter: authGuard(),
    component: () =>
      import(
        /* webpackChunkName: "CardUser" */ "../components/CardUserAdmin.vue"
      ),
  },
  {
    path: "/panel",
    name: "panel",
    beforeEnter: authGuard(),
    component: () =>
      import(
        /* webpackChunkName: "CardUser" */ "../components/CardUserAdmin.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    if (localStorage.getItem("token")) return next("/home");
  }

  next();
});

export default router;
