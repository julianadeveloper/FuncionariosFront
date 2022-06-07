<template>
<section class="updateuser">

<form class="center form-create"  @submit.prevent="userUdpdate()">
  <div class="form-group">
    <h5>Alterar dados de Usuario</h5>
    <label for="exampleInputEmail1">Número de matricula</label>
<input type="text" class="form-control" id="exampleInputEmail1" placeholder="matrícula" v-model="matricula">
  </div>
   <div class="form-group">
    
      
    <label for="exampleInputEmail1">Nome do usuário</label>
<input type="text" class="form-control" id="exampleInputName" placeholder="Nome" v-model="name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"> Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" v-model="password">
  </div>
   <div class="form-group">
    <label for="exampleInputPassword1">Confirmar Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirmar senha" v-model="passconfirm">
  </div>
  <button type="submit" class="btn btn-success">Cadastrar</button>
</form>
</section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UpdateUser",
   
})
</script>
<style scope>
.create-user{
    display: flex;
    overflow: hidden;
    background: rgb(7, 6, 6);
}
.form-create{
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