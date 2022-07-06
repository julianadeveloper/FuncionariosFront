import { Router } from "vue-router";

export class logout{
private static instance: Router;

public router: Router;


constructor(rout: any){
  this.router = rout();
}

public logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("sessionId")
    this.router.push({ name: "login" });
  }
}