import { createStore, Module } from "vuex";
import { State } from "./types";

export default createStore({
    state: (): State => ({
        token: localStorage.getItem("token") || "",

      }),
});
