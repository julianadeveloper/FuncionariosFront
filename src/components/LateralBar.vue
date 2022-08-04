<template>
  <header class="header">
    <img id="logo" src="../assets/images/logo.svg" alt="logo-vuaida" />
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdow-content">
        <a
          href="#"
          class="dropdown-item home-icon"
          @click="$router.push({ name: 'DashBoardView' })"
        >
          Home
          <!-- <i class="fa-solid fa-house-user fa-lg"></i> -->
        </a>
      </div>
    </div>

    <a class="icon-theme" @click="changeTheme">
      <i class="fa-solid fa-moon"></i>

      {{ textButton }}
    </a>

    <button class="home-icon" @click="$router.push({ name: 'DashBoardView' })">
      Home
      <i class="fa-solid fa-house-user fa-lg"></i>
    </button>

    <button class="logout-icon" @click.prevent="logout">
      Sair
      <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>

    </button>
          <div>
        <UserProfile/>
      </div>
  </header>
</template>

<script lang="ts">
import { logoutService } from "@/services/logout";
import { defineComponent } from "vue";
import { POSITION, useToast } from "vue-toastification";
import  UserProfile  from '../components/UserProfile.vue'
export default defineComponent({
  name: "LateralBar",
  components: { UserProfile },
  data() {
    return {
      DarkThemeOn: false,
      logoutService: new logoutService(this.$router),
    };
  },
  computed: {
    textButton() {
      if (!this.DarkThemeOn) {
        return "Dark";
      } else {
        return "Light";
      }
    },
  },
  methods: {
    chamaToast() {
      const toast = useToast();

      // or with options
      toast.warning("Você fez logout", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    async logout() {
      await this.logoutService.logoutUser();
      this.chamaToast();
    },
    changeTheme() {
      this.DarkThemeOn = !this.DarkThemeOn;
      this.$emit("theme", this.DarkThemeOn);
    },
  },
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 6rem;
  padding: 1rem;
  /* background: rgba(17, 16, 16, 0.747); */
  background: #ebebee;
  /* box-shadow: 4px 5px 20px; */
}
#logo {
  max-width: 100px;
  height: auto;
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
