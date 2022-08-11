<template>
  <div class="container-form">
    <!--imagem de login lado esquerdo-->
    <div class="img-login">
      <img src="../assets/images/login.svg" alt="login" />
    </div>
    <hr />
    <form class="form-login">
      <div class="title-form">
        <div class="vuaida">
          <img src="../assets/images/logo.svg" />
        </div>
        <span class="subtitle2">Controle de acesso de funcionários</span>
      </div>

      <div class="form-group">
        <label class="label" for="exampleInputEmail1">
          <i class="fas fa-user"></i>
          Matrícula
        </label>
        <div class="field">
          <div class="control">
            <input
              type="text"
              id="exampleInputEmail1"
              placeholder="Numero de matrícula"
              required
              v-model="user.username"
              class="input is-link"
            />
          </div>
        </div>
        <label class="label" for="exampleInputEmail2">
          <i class="fas fa-lock"></i>

          Senha</label
        >

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

      <button
        type="button"
        class="btn btn-white btn-animate"
        @click.prevent="login()"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { ApiService } from "@/services/api";
import { defineComponent, ref } from "vue";
import { mapMutations } from "vuex";
import { SocketModule } from "@/services/socket";
import { POSITION, useToast } from "vue-toastification";

export default defineComponent({
  name: "LoginUser",
  data() {
    return { showPassword: false };
  },
  setup() {
    const apiService = new ApiService();
    const user = ref({
      name: "",
      username: "",
      password: "",
      role: "",
      token: "",
      _id: "",
    });

    return { user, apiService, SocketModule };
  },
  ccomputed: {
    togglePassword() {
      if (this.showPassword) {
        return "Hide";
      } else {
        return "Show";
      }
    },
  },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    chamaToast() {
      const toast = useToast();

      // or with options
      toast.success("Você está logado", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    ///mapeando minhas mutations e tudo q existem nelas
    //o metodo setToken esta importando do diretório authModule/setToken a mutation
    ...mapMutations({
      setToken: "authModule/setToken",
      setRole: "authModule/setRole",
      setId: "authModule/setId",
      setName: "authModule/setName",
    }),
    async login() {
      try {
        const response = await this.apiService.login({
          required: true,
          username: this.user.username,
          password: this.user.password,
          role: this.user.role,
          _id: this.user._id,
          name: this.user.name,
        });



         this.setId(response.data._id) 
        this.setName(response.data.name);
        localStorage.setItem("sessionLogin", response.data._id);

        this.setToken(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);

        this.setRole(response.data.role);
        localStorage.setItem("role", response.data.role);

        this.$router.push({ name: "DashBoardView" });
        const token = response.data;
        this.setRole(response.data.role);
        this.chamaToast();
        SocketModule.connect();
      } catch (error) {
        const toast = useToast();

        // or with options
        toast.error("Dados incorretos", {
          position: POSITION.TOP_CENTER,
          timeout: 2000,
        });
      }
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");
.control {
  display: flex;
}
label {
  padding: 0.25rem;
  margin: 1rem;
}
input {
  max-width: 100%;
  width: 80%;
}
span {
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #040404;
}
.vuaida {
  width: 200px;
  position: relative;
  margin: 1rem;
}
.title-form {
  animation: go-back 1s;
}

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
.title-form {
  color: black;
  margin-bottom: 0.25rem;
  padding: 1.25rem;
}
hr {
  border-left: 0.1rem solid rgba(49, 42, 42, 0.548);
  height: 70%;
  left: 50%;
  position: absolute;
}
.title-form .form-control {
  width: 70% !important;
}
.container-form {
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: var(--bg-login-primary);
  align-items: center;
  justify-content: space-between;
}
.img-login {
  position: relative;
}
.form-login {
  height: auto;
  width: 43%;
}
.form-group {
  width: 80%;
  align-items: center;
  justify-content: center;
  
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
  transform: translateY(3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: rgb(139, 59, 243);
  color: rgb(246, 246, 246);
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

@media only screen and (max-width: 720px) {
  hr {
    border-left: none;
  }
  .subtitle2 {
    position: relative;
  }
  .img-login {
    margin-right: 40%;
    width: 12rem;
    display: none;
  }
  .form-login {
    width: 50%;
    height: 100%;
  }
  .container-form {
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: var(--bg-login-primary);
    align-items: center;
  }
}
</style>
