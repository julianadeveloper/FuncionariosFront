<template>
<section class="createuser">

<form class="center form-create">
  <div class="form-group">
    <h5>Cadastrar Usuario</h5>
    <label for="exampleInputEmail1">Número de matricula</label>
<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Numero de matrícula">
  </div>
   <div class="form-group">
    
      
    <label for="exampleInputEmail1">Nome do usuário</label>
<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Numero de matrícula">
  </div>
   <div class="form-group">
    <label for="exampleInputPassword1">Confirmar Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Salvar</label>
  </div>
  <button type="submit" class="btn btn-success">Cadastrar</button>
</form>
</section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormCreateUser",
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