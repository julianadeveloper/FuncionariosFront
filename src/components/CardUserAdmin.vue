<template>
  <div v-for="(user, i) in users" :key="i" class="card" > <!--style="width: 22rem"-->
    <div class="card-container">
      <h5 class="card-title">Dados do Funcionário</h5>
      <p>Nome:{{ user.name }}</p>
      <p>Matricula:{{ user.username }}</p>
      <p>Funções: {{ user.role }}</p>
      <div v-if="isAdmin">
        <ButtonAdm :user="user" @delete="users.splice(i, 1)" />
      </div>

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
      console.log('watch')
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
      console.log('response:', response)
      return response;
    },
  },
  async mounted() {
    await this.listUsers();

    this.socketService.registerListener(
      "cards-users",
      "removed-user",
      (data: { id: string }) => {
        const foundIndex = this.users.findIndex((user) => user._id === data.id);
        if (foundIndex) this.users.splice(foundIndex, 1);
      }
    );

    this.socketService.registerListener(
      "up-users",
      "update",
      (data: { id: string }) => {
        this.users = []; //limpando o array
        this.listUsers(); //listando com os dados alterados q retornam do backend
      }
    );
       this.socketService.registerListener(
      "new",
      "new-user",
      (data: { id: string }) => {
        this.users = []; //limpando o array
        this.listUsers(); //listando com os dados alterados q retornam do backend
      }
    );
    
  },
});
</script>
<style scoped>

.card-container{
  box-shadow: 5px 5px 20px;
}
.btn {
  margin: 0.5rem;
}
.card-title,
.card-text {
  color: var(--text-primary);
  text-align: center;
}
.card {
  max-width: 100%;
  background: rgb(227, 222, 222);
  margin: 0.5rem;
  color: var(--text-primary);

}
p {
  color: var(--text-primary);
}

@media only screen and (max-width: 720px) {
  .card {
    max-width: 100%;
  }
}
</style>
