import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@/assets/globalStyle.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


library.add(fas);
const app = createApp(App);
app.use(Toast);
app.use(store);
app.use(router).mount("#app");
