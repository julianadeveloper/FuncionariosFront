<template>
  <header class="header">
    <img id="logo" src="../assets/images/logo.svg" alt="logo-vuaida" />

    <div>
      <UserProfile />
      <div class="dropdown">
        <button class="dropdown-trigger" @click="openDropDown">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
          <span class="icon is-small"> </span>
        </button>

        <div v-if="DropDown">
          <div class="dropdown-content">
            <a class="icon-theme dropdown-item" @click="changeTheme">
              <!-- <i class="fa-solid fa-moon texto-botao"></i> -->

              {{ textButton }}
            </a>

            <button
              class="home-icon dropdown-item"
              @click="$router.push({ name: 'DashBoardView' })"
            >
              <!-- <i class="fa-solid fa-house-user fa-lg"></i> -->
              Home
            </button>
            <button
              class="home-icon dropdown-item"
              @click="$router.push({ name: 'CreateView' })"
            >
              <!-- <i class="fa-solid fa-house-user fa-lg"></i> -->
              Cadastrar
            </button>
            <button class="logout-icon dropdown-item" @click.prevent="logout">
              Sair
              <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { logoutService } from "@/services/logout";
import { defineComponent } from "vue";
import { POSITION, useToast } from "vue-toastification";
import UserProfile from "../components/UserProfile.vue";
export default defineComponent({
  name: "LateralBar",
  data() {
    return {
      DropDown: false,
      DarkThemeOn: false,
      logoutService: new logoutService(this.$router),
    };
  },
  computed: {
       

    textButton() {
      if (!this.DarkThemeOn) {
        return "Tema Dark";
      } else {
        return "Tema Light";
      }
    },
  },
  methods: {
        chamaToast(){
           const toast = useToast();
   
         // or with options
         toast.warning("Você fez logout", {
           position: POSITION.BOTTOM_RIGHT,
           timeout: 2000
         })
    },
   async  logout() {
      await this.logoutService.logoutUser()
      this.chamaToast()
    },
    changeTheme() {
      this.DarkThemeOn = !this.DarkThemeOn;
      this.$emit("theme", this.DarkThemeOn);
    },
    openDropDown() {
      this.DropDown = !this.DropDown;
      console.log("dropdown", this.DropDown);
    },
  },
});
</script>

<style scoped>
.dropdown {
  top: 30px;
  position: absolute;
}
.header {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 100vh;
  /* background: rgba(17, 16, 16, 0.747); */
  background: #2a2f67;
  /* box-shadow: 4px 5px 20px; */
}

button {
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
}
::before {
  color: rgb(210, 205, 205);
}
.icon-theme,
.home-icon,
.user-icon,
.logout-icon {
  align-items: center;
  justify-content: center;
  margin: auto;
}
@media screen and (max-width: 720px) {
  .header {
    display: flex;
    width: 100vw;
    height: 12rem;
    flex-direction: row;
    align-items: center;
  }
}
</style>
