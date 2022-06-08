<template>
  <div id="mycard">
    <div v-for="(user, i) in users" :key="i" class="card" style="width: 22rem">
      <div class="card-body">
        <h5 class="card-title">Usuario</h5>
        <p>Nome:{{ user.username }}</p>
        <p>Matricula:{{ user.name }}</p>

        <a href="#" class="btn btn-primary btn-sm">Alterar dados</a>
        <a href="#" class="btn btn-danger btn-sm">Excluir Funcionario</a>

    </div>
        <!-- aqui irei retornar o procedimento q foi feito como get, delet, update... -->
        <p class="card-text column"></p>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ApiService } from "../services/api";
export default defineComponent({
  name: "CardUser",

  setup() {
    const apiService = new ApiService();

    const users = ref([]);

    onMounted(async () => {
      users.value = await apiService.listUsers();

    });
    return { users };
  },
});
</script>
<style>
#mycard {
  flex-wrap: wrap;
  margin: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.btn {
  margin: 0.5rem;
}
.card-title,
.card-text {
  color: white;
}
.card {
  max-width: 100%;
  background-color: rgb(34, 83, 126);
  margin: 0.5rem;
}
p {
  color: white;
}
</style>
