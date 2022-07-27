<template>
  <div v-for="(user, i) in users" :key="i" class="card">
    <div class="card-content" :user="user" @delete="users.splice(i, 1)">
      <i class="icon-user fa-solid fa-user fa-2xl"></i>
      <div class="">
        <MyModal class="modal" v-if="modal && user._id === userSelect" :user="user"  @closemymodal="close">
        </MyModal>

        <p>Nome:{{ user.name }}</p>
        <p>Matricula:{{ user.username }}</p>
        <p>Funções: {{ user.role }}</p>
      </div>
      <div v-if="isAdmin">
        <ButtonAdm
          @openmymodal="modalIsOpen"
          :user="user"
        />
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
import { POSITION, useToast } from "vue-toastification";
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
    return { modal: false, userSelect: "" };
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
      console.log("response:", response);
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
    await this.listUsers();

    this.socketService.registerListener(
      "cards-users",
      "removed-user",
      (data: { id: string }) => {
        const foundIndex = this.users.findIndex((user) => user._id === data.id);
        if (foundIndex) this.users.splice(foundIndex, 1);
        this.listUsers(); 
        
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
.modal{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

}
.btn {
  margin: 0.5rem;
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
  .card {
    height: 50%;
    max-width: 100%;
  }
}
</style>
