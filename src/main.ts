import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@/assets/globalStyle.css";
import io from 'socket.io-client'



const socket  = io("ws://localhost:3001")

socket.emit('home')
console.log('Connected in home');



socket.on('connected', ()=>{
    console.log(socket.id)
    if(socket.id === socket.id){
        localStorage.setItem("token", "");
            console.log('deslogar')
    }
})


library.add(fas);
const app = createApp(App);

app.use(store);
app.use(router).mount("#app");
