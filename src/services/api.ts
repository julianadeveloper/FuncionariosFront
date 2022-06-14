import store from "@/store";
import axios, { AxiosInstance } from "axios";

export class ApiService {
  private readonly api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: { 
      Authorization:`Bearer ${store.getters["authModule/getToken"]}`
    }
  });

  async listUsers() {
    const result = await this.api.get("/users");
    return result.data;
  }

  async listUserId( id  : { _id: string }) {
    const result = await this.api.get("/users/:_id");
    return result.data;
  }
  async listUserLogger(){
    const resultUser = await this.api.get("/users/:id")
    return resultUser.data
  }

  async userCreate(data : any ){
    return this.api.post('/users', data)
    
  }

  async userUdpdate(data: any){
    return this.api.put('/users/:username', data);
  }
  
  async login(data: any){
    
    return this.api.post('/auth/login', data)
}

 async deleteUser(ids : string[]){
  return this.api.delete('/users', {params: { ids: ids.join(',')}})
 }
}
