import { createStore} from "vuex";
import { State } from "./types";

export default createStore({
    state: (): State => ({
        token: localStorage.getItem("token") || "",
        role : localStorage.getItem("role") || "",
        sessionId: localStorage.getItem("sessionId") || "",

      }),
});
