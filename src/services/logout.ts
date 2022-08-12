import { Router } from "vue-router";

export class logoutService {
  private router: Router;

  constructor(rout: any) {
    this.router = rout;
  }

  async logoutUser() {
    // localStorage.removeItem("token");
    // localStorage.removeItem("sessionLogin");
    // localStorage.removeItem("role");
    localStorage.clear()
    await  this.router.push({ name: "login" });
  }
}
