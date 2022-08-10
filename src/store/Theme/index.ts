import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { Theme } from "./types";

/*configuração da chave de acesso q
 o componente precisa para acessar a store*/
export const key: InjectionKey<Store<Theme>> = Symbol();
export default createStore({
  state: (): Theme => ({
    DarkThemeOn: false,
  }),

  getters: {
    getDarkThemeOn: (state) => state.DarkThemeOn,
  },
  mutations: {
    setDarkThemeOn: (state) => (state.DarkThemeOn = !state.DarkThemeOn),
  },
});
