<template>
  <div class="container-form">
    <!--imagem de login lado esquerdo-->
    <div class="img-login">
      <img src="../assets/images/login.svg" alt="" />
    </div>
    <hr />
    <form class="form-login" @submit.prevent="login()">
      <div class="title-form">
        <h2>Vua!da</h2>
        <span>Seu controle para gestão de funcionários</span>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Matricula</label>
        <input
          type="login"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Numero de matrícula"
          required
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>

        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Senha"
          required
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-white btn-animate">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ApiService } from "@/services/api";
import { defineComponent, ref } from "vue";
import { mapMutations } from "vuex";
import { SocketModule } from "@/services/socket";
export default defineComponent({
  name: "LoginUser",

  setup() {
    const apiService = new ApiService();
    const user = ref({
      username: "",
      password: "",
      role: "",
      token: "",
      _id: "",
    });

    return { user, apiService, SocketModule };
  },

  methods: {
    ///mapeando minhas mutations e tudo q existem nelas
    //o metodo setToken esta importando do diretório authModule/setToken a mutation
    ...mapMutations({
      setToken: "authModule/setToken",
      setRole: "authModule/setRole",
      setId: "authModule/setId",
    }),

    async login() {
      const response = await this.apiService.login({
        required: true,
        username: this.user.username,
        password: this.user.password,
        role: this.user.role,
        _id: this.user._id,
      });

      // this.setId(response.data._id);
      localStorage.setItem('sessionLogin', response.data._id);

      this.setToken(response.data.access_token);
      localStorage.setItem("token", response.data.access_token);

      this.setRole(response.data.role);
      localStorage.setItem("role", response.data.role);

      this.$router.push({ name: "DashBoardView" });
      const token = response.data;
      this.setRole(response.data.role);
      SocketModule.connect()
    },
  },
  mounted() {
    console.log(this.setToken);
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");
.title-form {
  animation: go-back 1s  ;
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
  margin-bottom: 2rem;
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

@media only screen and (max-width: 720px) {
  hr {
    border-left: none;
  }
  .img-login {
    margin-right: 40%;
    width: 12rem;
  }
  .form-login {
    width: 50%;
    height: 100%;
  }
  .container-form {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: var(--bg-login-primary);
    align-items: center;
  }
}
</style>
6
