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
        sessionId: localStorage.getItem("sessionId") || "",

      }),

      getters: {
        getToken: (state) => state.token,
        getRole : (state) => state.role,
        isAdmin: (state) => state.role === 'admin',
        isLogged: (state) => state.sessionId,
      },

      mutations: {
        setToken: (state, value) => (state.token = value),
        setRole: (state, value) => (state.role = value),
        setSessionId: (state, value) => (state.sessionId = value),
      },
      actions:{
          
      }
    },
  },
});
