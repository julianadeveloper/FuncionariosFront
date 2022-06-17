import { createStore, Store } from "vuex";
import { UsersUpdate } from "../update/types";
import { InjectionKey } from "vue";



export const key: InjectionKey<Store<UsersUpdate>> = Symbol()
export default createStore({
    state: (): UsersUpdate => ({
        _id: '',
        username: '', //matricula
        name: '', //nome de usuario
        password: '', //senha
        passwordConfirm: '' //senha para confirmar
      }),
});
