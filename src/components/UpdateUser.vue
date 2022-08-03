<template>
  <div class="form-body">
    <form class="form-update">
      <div class="form-group">
        <h5>Alterar dados de Usuario</h5>
        <div class="form-group">
          <label for="exampleInputEmail1">Matricula</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="matrícula"
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Nome do usuário</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Nome"
            v-model="user.name"
          />
        </div>
           <div class="form-group">
          <label for="exampleInputEmail1">Email do usuário</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputName"
            placeholder="email"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <label>Tipo de usuário</label>
          <select
            class="form-control form-control-sm"
            v-model="user.role"
            id="roles"
            name="roles"
          >
            <option value="operador" name="roles">Operador</option>
            <option value="admin" name="roles">Admin</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"> Senha</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Senha"
            v-model="user.password"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirmar Senha</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword2"
            placeholder="Confirmar senha"
            v-model="user.password"
          />
        </div>
        <button
          type="button"
          class="btn btn-white btn-animate"
          @click.prevent="update()"
        >
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ApiService } from "@/services/api";
import { POSITION, useToast } from "vue-toastification";

export default defineComponent({
  name: "UpdateUser",

  setup() {
    const apiService = new ApiService();
    const user = ref({
      _id: "",
      username: "",
      name: "",
      password: "",
      role: "",
      email: '',
    });
    return { user, apiService };
  },
  methods: {
    async update() {
      await this.apiService.userUpdate(this.user._id, this.user);
      this.$emit("update", this.user);
      this.chamaToast();
      this.$router.push({ name: "home" });
    },

    chamaToast() {
      const toast = useToast();

      // or with options
      toast.info("Dados alterados com sucesso", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    async openUser() {
      this.user = await this.apiService.listUserById(
        this.$route.params.id as string
      );
      console.log(this.user);
    },
  },
  mounted() {
    this.openUser();
  },
});
</script>
<style scoped>
.form-body {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50vw;
  height: auto;
  background-color: rgb(209, 211, 214);
}
.form-update {
  color: #777;
  padding: 1rem;
  width: 20rem;
  height: auto;
  /* border-radius: 10%; */
  text-align: center;
}
.form-group {
  width: 100%;
}
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: absolute;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: #fff;
  color: #777;
}

.btn-white::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 1s ease-out;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
