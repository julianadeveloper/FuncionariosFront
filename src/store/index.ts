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

      }),

      getters: {
        getToken: (state) => state.token,
      },

      mutations: {
        setToken: (state, value) => (state.token = value),
      },
      actions:{
          
      }
    },
  },
});
