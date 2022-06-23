<template>
  <div v-for="(user, i) in users" :key="i" class="card" style="width: 22rem">
    <div class="card-body">
      <h5 class="card-title">Dados do Funcionário</h5>
      <p>Nome:{{ user.name }}</p>
      <p>Matricula:{{ user.username }}</p>
      <p>Funções: {{ user.role }}</p>
      <div v-if="isAdmin">
        <ButtonAdm :user="user" @delete="users.splice(i, 1)" />
      </div>

      <!-- aqui irei retornar o procedimento q foi feito como get, delet, update... -->
      <p class="card-text column"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "../services/api";
import ButtonAdm from "./ButtonAdm.vue";
import { mapGetters } from "vuex";
import { SocketModule } from "@/services/socket";
import User from "@/interface/User";
export default defineComponent({
  name: "CardUserAdmin",
  components: { ButtonAdm },
  props: {
    search: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters({ isAdmin: "authModule/isAdmin" }),
  },
  watch: {
    search(value) {
      this.listUsers(value);
    },
  },

  setup() {
    const apiService = new ApiService();
    const users = ref<User[]>([]);
    return { users, apiService, socketService: SocketModule.connect() };
  },
  methods: {
    //método de busca do input
    async listUsers(search = "") {
      const response = await this.apiService.listUsers(this.search);
      this.users = await this.apiService.listUsers(search);
    },
  },
  async mounted() {
    await this.listUsers();

    this.socketService.registerListener("cards-users","removed-user", (data: { id: string }) => {
        const foundIndex = this.users.findIndex((user) => user._id === data.id);
        if (foundIndex) this.users.splice(foundIndex, 1);
      }
    );
  },
});
</script>
<style scoped>
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
    max-width: 100%;
  }
}
</style>
