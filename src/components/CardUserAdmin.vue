<template>
<div v-for="(user, i) in users" :key="i" class="card" style="width: 22rem">
    <div class="card-body">
      <h5 class="card-title">Dados do Funcionário</h5>
      <p>Nome:{{ user.username }}</p>
      <p>Matricula:{{ user.name }}</p>
      <!-- <p>Função: {{users.occupation}}</p> -->
      <ButtonAdm :user="user" @delete="users.splice(i, 1)" />

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
  props: {
    search: {
      type: String,
      default: "",
    },
  },

  watch: {
    search(value) {
      console.log("opa", value)
      this.listUsers(value)
    }
  },

  setup() {
    const apiService = new ApiService();
    const users = ref([]);
    return { users, apiService };
  },
  methods: {
    async listUsers(search="") {
      this.users = await this.apiService.listUsers(search);
    },
  },
  async mounted(){
    await this.listUsers()
  },
  components: { ButtonAdm },
});
</script>
<style>
.btn {
  margin: 0.5rem;
}
.card-title,
.card-text {
  color: white;
  text-align: center;
}
.card {
  max-width: 100%;
  background-color: rgb(61, 70, 78);
  margin: 0.5rem;
}
p {
  color: white;
}

@media only screen and (max-width: 720px) {
  .card {
    max-width: 50%;
  }
}
</style>
