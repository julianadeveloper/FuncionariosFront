import io, { Socket } from "socket.io-client";

export class SocketModule {
  private static instance: SocketModule;

  private io: Socket;
  private listeners = new Map<string, any>(); //tentar entender melhor

  
//constructor do que vai ter na minha classe.
  constructor(uri: string) {
    this.io = io(uri);
    this.registerDefaultListeners();
  }

  public static connect() {
    if (SocketModule.instance) return SocketModule.instance;
		console.log('vou criar!!!')
    SocketModule.instance = new SocketModule("ws://localhost:3001");
    return SocketModule.instance;
  }

  private registerDefaultListeners() {
    this.io.on("connected", () => {
      console.log("hehehee pivete");
    });
  }

  public registerListener(
    namespace: string,
    event: string,
    cb: (...args: any) => void
  ) {
    if (this.listeners.has(`${namespace}/${event}`)) return;

    this.io.on(event, cb);
    this.listeners.set(`${namespace}/${event}`, cb);
  }

  public removeListener(namespace: string, event: string) {
    if (!this.listeners.has(`${namespace}/${event}`)) return;

    this.io.removeListener(event);
    this.listeners.delete(`${namespace}/${event}`);
  }

 
  // const socket  = io("ws://localhost:3001")

  // socket.emit('home')
  // console.log('Connected in home');

  // socket.on('connected', ()=>{
  //     console.log('usuario conectado')
  //     console.log(socket.id)
  //     if(socket.id === socket.id){
  //         localStorage.setItem("token", "");
  //             console.log('deslogar')
  //     }
  // })
}
