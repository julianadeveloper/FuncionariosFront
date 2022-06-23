import io from "socket.io-client";


export module SocketClient { 

const socket  = io("ws://localhost:3001")

socket.emit('home')
console.log('Connected in home');



socket.on('connect', ()=>{
    console.log('usuario conectado')
})
}


