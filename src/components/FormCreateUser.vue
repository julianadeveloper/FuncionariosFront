<template>
  <div class="form-body">
    <form class="form-update">
      <div class="form-group">
        <div class="form-group">
          <label for="exampleInputEmail1">Matricula</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="matrícula"
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Nome do usuário</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Nome"
            v-model="user.name"
          />
        </div>
        <div class="form-group " >
          <label>Tipo de usuário</label>
          <select
            class="form-control form-control-sm"
            v-model="user.role"
            id="roles"
            name="roles"
          >
            <option value="operador" name="roles">Funcionário</option>
            <option value="admin" name="roles">Admin</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"> Senha</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Senha"
            v-model="user.password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirmar Senha</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword2"
            placeholder="Confirmar senha"
            v-model="user.password"
          />
        </div>
        <button type="button" class="btn btn-success" @click.prevent="register">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ApiService } from "../services/api";
import { defineComponent, ref } from "vue";
import { POSITION, useToast } from "vue-toastification";
export default defineComponent({
  name: "FormCreateUser",
  data() {
    const user = ref({
      username: "",
      name: "",
      password: "",
      passwordConfirm: "",
      role: "",
    });
    const apiService = new ApiService();
    return { user, apiService };
  },

  methods: {

     chamaToast() {
      const toast = useToast();
      // or with options
      toast.success(`O usuário ${this.user.username} foi cadastrado!`, {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    
  async  register() {
    try{
      const passwordOk = this.user.password === this.user.passwordConfirm;
     await this.apiService.userCreate(this.user);
      this.$router.push({ name: "home" });
      this.chamaToast()

    }catch(error){
      const toast = useToast();

          toast.warning(`O usuário ${this.user.username} já existe, Insira outro numero de matricula.!`, {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    }
    },
  },
});
</script>

<style scope>
.createuser {
  display: flex;
  overflow: hidden;
}
.form-create {
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(17, 16, 16, 0.747);
  padding: 1rem;
  width: 20rem;
  height: auto;
  border-radius: 10%;
}
</style>
