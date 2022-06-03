<template>
<body class="login">
<form class="formulario-login center">
  <div class="form-group">
      <h5>Login</h5>
    <label for="exampleInputEmail1">Número de matricula</label>
<input type="login" class="form-control" id="exampleInputEmail1"  placeholder="Numero de matrícula">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Salvar</label>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
</body>

</template>


<script lang="ts">

import { defineComponent } from "vue";
export default defineComponent({
  name: "LoginUser",
  components:{
  },
});

</script>



<style scope>
body{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgb(7, 6, 6);
}
.formulario-login{
    color: white;
    background-color: rgba(17, 16, 16, 0.747);
    padding: 1rem;
    width: 20rem;
    height: 20rem;
    border-radius: 10%;
}
h5{
    text-align: center;
}
</style>