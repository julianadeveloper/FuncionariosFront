import axios, { AxiosInstance } from "axios";

export class ApiService {
  private readonly api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
  });

  async listUsers() {
    const result = await this.api.get("/users");
    return result.data;
  }

  async userCreate(data : any ){
    return this.api.post('/users', data)
    
  }

  async userUdpdate(data: any){
    return this.api.put('/users/:username', data);
  }

async login(data: any){
  return this.api.post('/auth/login', data);
}
}
