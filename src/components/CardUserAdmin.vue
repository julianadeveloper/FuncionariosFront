<template>
  <div v-for="(user, i) in users" :key="i" class="card">
    <div class="card-content" :user="user">
      <i class="icon-user fa-solid fa-user fa-2xl"></i>
      <MyModal
        class="modal"
        v-if="modal && user._id === userSelect"
        :user="user"
        @closemymodal="close"
        @delete="updateComponent"
      >
      </MyModal>

      <p>Nome:{{ user.name }}</p>
      <p>Matricula:{{ user.username }}</p>
      <p>Funções: {{ user.role }}</p>
      <p>Email: {{ user.email }}</p>

      <div v-if="isAdmin">
        <ButtonAdm @openmymodal="modalIsOpen" :user="user" />
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
import MyModal from "@/components/MyModal.vue";
export default defineComponent({
  name: "CardUserAdmin",
  components: { ButtonAdm, MyModal },
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
      console.log("watch");
      this.listUsers(value);
    },
  },
  data() {
    const apiService = new ApiService();
    const users = ref<User[]>([]);
    return {
      users,
      apiService,
      socketService: SocketModule.connect(),
      modal: false,
      userSelect: "",
    };
  },

  methods: {
    async updateComponent(users: User[]) {
      this.users = [];
      await this.listUsers();
    },
    //método de busca do input
    async listUsers(search = "") {
      const response = await this.apiService.listUsers(this.search);
      this.users = await this.apiService.listUsers(search);
      return response;
    },
    modalIsOpen(params: string) {
      this.userSelect = params;
      this.modal = !this.modal;
    },

    close(params: string) {
      this.userSelect = params;
      this.modal = !this.modal;
    },
  },
  async mounted() {
    this.users = [];
    await this.listUsers();

    this.socketService.registerListener(
      "cards-users",
      "removed-user",
      (data: { id: string }) => {
        // const foundIndex = this.users.findIndex(
        //   (user) => user._id
        // );
        // if (foundIndex) this.users.splice(foundIndex, 1);
        //  this.users = [];
        this.listUsers();
        console.log("teste2", data.id);
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
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.icon-user {
  color: #5159bb;
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
}
.card-text {
  text-align: center;
}
.card {
  padding: 1.5rem;
  margin: 1rem;
  max-height: 50%;
}

@media only screen and (max-width: 720px) {
  .card-content {
    background-color: transparent;
    /* padding: 1.5rem; */
    height: 25%;
  }
}
</style>
