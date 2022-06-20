import { createStore } from "vuex";
import { State } from "./auth/types";

export default createStore({
  state: {
  },

  getters: {},

  mutations: {},

  actions: {

    
  },

  modules: {
    authModule: {
      namespaced: true,
      state: (): State => ({
        token: localStorage.getItem("token") || "",
        role : localStorage.getItem("role") || "",

      }),

      getters: {
        getToken: (state) => state.token,
        getRole : (state) => state.role,
        isAdmin: (state) => state.role === 'admin',
      },

      mutations: {
        setToken: (state, value) => (state.token = value),
        setRole: (state, value) => (state.role = value),

      },
      actions:{
          
      }
    },
  },
});
