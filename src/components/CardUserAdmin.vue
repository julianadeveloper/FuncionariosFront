<template>

    <div v-for="(user, i) in users" :key="i" class="card" style="width: 22rem">
      <div class="card-body">
        <h5 class="card-title">Usuario</h5>
        <p>Nome:{{ user.username }}</p>
        <p>Matricula:{{ user.name }}</p>

          <ButtonAdm :user="user" @delete="users.splice(i, 1)"/>

        <!-- aqui irei retornar o procedimento q foi feito como get, delet, update... -->
        <p class="card-text column"></p>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ApiService } from "../services/api";
import ButtonAdm from "./ButtonAdm.vue";
export default defineComponent({
    name: "CardUserAdmin",
    setup() {
        const apiService = new ApiService();
        const users = ref([]);
        onMounted(async () => {
            users.value = await apiService.listUsers();
        });
        return { users };
    },
    components: { ButtonAdm }
});
</script>
<style>

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
