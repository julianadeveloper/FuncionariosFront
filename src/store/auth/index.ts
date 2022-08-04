import { createStore} from "vuex";
import store from "..";
import { State } from "./types";

export default createStore({
    state: (): State => ({
        token: localStorage.getItem("token") || "",
        role : localStorage.getItem("role") || "",
        _id: localStorage.getItem('sessionLogin') || "",
        name: ''
        //localStorage.getItem("name") || "",


      }),
});
