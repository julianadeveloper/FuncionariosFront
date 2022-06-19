<template>
  <form class="center form-create">
    <div class="form-group">
      <h5>Alterar dados de Usuario</h5>
      <div class="card-body">
        <label for="exampleInputEmail1">Matricula</label>
        <p></p>
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
      <button type="button" class="btn btn-success" @click="update()">
        Salvar
      </button>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "@/services/api";
export default defineComponent({
  name: "UpdateUser",

  setup() {
    const apiService = new ApiService();
    const user = ref({
      _id: "",
      username: "",
      name: "",
      password: "",
    });
    return { user, apiService };
  },
  methods: {
    async update() {
      console.log(this.user);
 await this.apiService.userUpdate(this.user._id, this.user);

      this.$emit("update", this.user);
    },
    async openUser() {
      this.user = await this.apiService.listUserById(this.$route.params.id as string);
      console.log(this.user)
    },
  
  },
  mounted(){
    this.openUser()
  }

});
</script>
<style scope>
.create-user {
  display: flex;
  overflow: hidden;
  background: rgb(7, 6, 6);
}
.form-create {
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem;
  width: 20rem;
  height: auto;
  border-radius: 10%;
}
</style>
