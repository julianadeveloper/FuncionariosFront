<template>
  <div class="form-body">
    <form class="form-update">
      <div class="form-group">
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
          <label class="label" for="email">Email do usuário</label>
          <input
            required
            class="form-control"
            id="email"
            name="email"
            placeholder="email"
            type="email"
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
            <option value="operador" name="roles">Funcionário</option>
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
        </div>
        <button type="button" class="btn btn-create" @click.prevent="register">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { ApiService } from "../services/api";
import { defineComponent, ref } from "vue";
import { POSITION, useToast } from "vue-toastification";
export default defineComponent({
  name: "FormCreateUser",
  data() {
    const user = ref({
      username: "",
      name: "",
      password: "",
      passwordConfirm: "",
      role: "",
      email: "",
    });
    const apiService = new ApiService();
    return {
      user,
      apiService,
      showPassword: false,
      showPasswordConfirm: false,
    };
  },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      this.showPasswordConfirm = this.showPassword;
    },
    chamaToastSucess() {
      const toast = useToast();

      // or with options
      toast.success(`O usuário ${this.user.username} foi cadastrado!`, {
        position: POSITION.TOP_CENTER,
        timeout: 2000,
      });
    },
    toastPassword() {
      const toast = useToast();

      // or with options
      toast.error("As senhas não coincidem!", {
        position: POSITION.TOP_CENTER,
        timeout: 2000,
      });
    },

    async register() {
      const passwordOk = this.user.password === this.user.passwordConfirm;
      try {
        if (!passwordOk || "") this.toastPassword();
        else {
          await this.apiService.userCreate(this.user);
          this.$router.push({ name: "home" });
          this.chamaToastSucess();
        }
      } catch (error) {
        const validateUser = this.user;
        const passwords = this.user.password && this.user.passwordConfirm;
        if (
          validateUser.username ||
          validateUser.email ||
          validateUser.name ||
          validateUser.role ||
          passwords.length > 0
        ) {
          const toastMatricula = useToast();

          toastMatricula.error("Você precisa preencher todos os dados!", {
            position: POSITION.TOP_CENTER,
            timeout: 2000,
          });
        }
      }
    },
  },
});
</script>

<!-- <style scope>
.form-update {
  color: #777;
  padding: 1rem;
  width: 20rem;
  height: auto;
  /* border-radius: 10%; */
}
.createuser {
  display: flex;
  overflow: hidden;
}
.form-create {
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(17, 16, 16, 0.747);
  padding: 1rem;
  width: 20rem;
  height: auto;
  border-radius: 10%;
}
</style> -->
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
  border-radius: 10%;
  text-align: center;
  margin: 10px;
}
.form-group {
  margin: 0;
  width: 100%;
  height: 100%;
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

.btn-create {
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
