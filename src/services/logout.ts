import { Router } from "vue-router";

export class logoutService{
private static instance: Router;

public router: Router;


constructor(rout: Function){
  this.router = rout();
}

public logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("sessionId")
    this.router.push({ name: "login" });
  }
}