<template>
<div id="mycard">
<div  class="card" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title">Usuario</h5>
        <p class="card-text column">
          Nome: Funcionario x; <br/>
          Matricula: 1234,
        </p>
        <a href="#" class="btn btn-primary btn-sm">Alterar dados</a>
        <a href="#" class="btn btn-danger btn-sm">Excluir Funcionario</a>
        <a href="#" class="btn btn-success btn-sm">Salvar</a>
      </div>
    </div>
  </div>  
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardUser",
});
</script>
<style>
#mycard{
    margin: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
}
.btn{
    margin: 0.5rem;
}
.card-title, .card-text{
        color: white;

}
.card{
    background-color: rgb(34, 83, 126);
}

</style>
