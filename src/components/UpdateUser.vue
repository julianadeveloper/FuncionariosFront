<template>
  <div class="form-body">
    <form class="form-update">
      <div class="form-group">
        <h5>Alterar dados de Usuario</h5>
        <div class="form-group">
          <label class="label" for="exampleInputEmail1">Matricula</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="matrícula"
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label class="label" for="exampleInputEmail1">Nome do usuário</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Nome"
            v-model="user.name"
          />
        </div>
        <div class="form-group">
          <label class="label" for="exampleInputEmail1">Email do usuário</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputName"
            placeholder="email"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <label class="label">Tipo de usuário</label>
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
          <label for="exampleInputPassword1" class="label"> Senha</label>
          <div class="field has-icons-left has-icons-right">
            <div class="control">
              <input
                v-if="showPassword"
                type="text"
                id="exampleInputEmail2"
                placeholder="Senha"
                required
                v-model="user.password"
                class="input is-link"
              />
              <input
                v-else
                type="password"
                id="exampleInputEmail2"
                placeholder="Senha"
                required
                v-model="user.password"
                class="input is-link"
              />

              <div>
                <div class="form-group">
                  <label class="label" for="exampleInputPassword1"
                    >Confirmar Senha</label
                  >
                  <input
                    v-if="showPasswordConfirm"
                    type="text"
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="Confirmar senha"
                    v-model="user.passwordConfirm"
                  />
                  <input
                    v-else
                    type="password"
                    id="exampleInputEmail2"
                    placeholder="Senha"
                    required
                    v-model="user.passwordConfirm"
                    class="input is-link"
                  />
                </div>
              </div>
              <div class="btn-show-pass">
                <button class="btn btn-animate" @click.prevent="togglePassword">
                  <span class="icon is-small is-left">
                    <i
                      class="fas"
                      :class="{
                        'fa-eye-slash': showPassword,
                        'fa-eye': !showPassword,
                      }"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <!-- <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Senha"
            v-model="user.password"
          /> -->
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
  data() {
    return { showPassword: false, showPasswordConfirm: false };
  },
  setup() {
    const apiService = new ApiService();
    const user = ref({
      _id: "",
      username: "",
      name: "",
      password: "",
      role: "",
      email: "",
      passwordConfirm: "",
    });
    return { user, apiService };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      this.showPasswordConfirm = this.showPassword;
    },
    async update() {
      const passwordOk = this.user.password == this.user.passwordConfirm;
      const passvazia = "";
      try {
        if (passwordOk || passvazia) {
          await this.apiService.userUpdate(this.user._id, this.user);
          this.$emit("update", this.user);
          this.chamaToast();
          this.$router.push({ name: "home" });
        } else {
          this.chamaToastPass();
        }
      } catch (error) {
        this.chamaToastError();
      }
    },

    chamaToast() {
      const toastSucess = useToast();

      toastSucess.info("Dados alterados com sucesso", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    chamaToastError() {
      const toastError = useToast();
      // or with options
      toastError.error("Dados incorretos! Reveja as alterações", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    chamaToastPass() {
      const toastPass = useToast();
      // or with options
      toastPass.error("As senhas não coincidem!", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    async openUser() {
      this.user = await this.apiService.listUserById(
        this.$route.params.id as string
      );
      // console.log(this.user);
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
  height: 80vh;
  background-color: rgb(209, 211, 214);
}
.form-update {
  color: #777;
  width: 20rem;
  height: auto;
  border-radius: 10%;
  text-align: center;
}
.form-group {
  margin: 0;
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
  font-weight: 600;
  background-color: rgba(48, 72, 205, 0.793);
  color: rgb(255, 255, 255);
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
