import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@/assets/globalStyle.css";
import io from "socket.io-client";


export const socket  = io("ws://localhost:3001")

socket.emit('home')
console.log('Connected in home');




socket.on('home2', ()=>{
    console.log('evento no front')
})






library.add(fas);

const app = createApp(App);
//tornando o socket uma var global
app.config.globalProperties.$socket = socket;


app.use(store);
app.use(router).mount("#app");
