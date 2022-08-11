<template>
  <header class="header">
    <img id="logo" src="../assets/images/logo.svg" alt="logo-vuaida" />

    <div>
      <UserProfile @open="openDropDown" />

      <div class="dropdown" v-if="DropDown">
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
  </header>
</template>

<script lang="ts">
import { logoutService } from "@/services/logout";
import { defineComponent } from "vue";
import { POSITION, useToast } from "vue-toastification";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default defineComponent({
  name: "LateralBar",
  components: { UserProfile },
  data() {
    return {
      DropDown: false,
      logoutService: new logoutService(this.$router),
    };
  },
  computed: {
    ...mapGetters({ DarkThemeOn: "ThemeModule/getDarkThemeOn" }),

    textButton() {
      if (!this.DarkThemeOn) {
        return "Tema Dark";
      } else {
        return "Tema Light";
      }
    },
  },
  methods: {
    ...mapMutations({ MudaTema: "ThemeModule/MudaTema" }),
    chamaToast() {
      const toast = useToast();

      // or with options
      toast.success("Você fez logout", {
        position: POSITION.BOTTOM_RIGHT,
        timeout: 2000,
      });
    },
    async logout() {
      await this.logoutService.logoutUser();
      this.chamaToast();
    },
    changeTheme() {
      this.MudaTema();
      console.log(this.DarkThemeOn);
    },
    openDropDown() {
      this.DropDown = !this.DropDown;
      // console.log("dropdown", this.DropDown);
    },
  },
});
</script>

<style scoped>
.container-user {
  margin: 10px;
}
.dropdown {
  position: absolute;
}
.header {
  color: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  padding: 1rem;
  background: #ebebee;
}
#logo {
  max-width: 100px;
  height: auto;
}

@media screen and (max-width: 720px) {
  .header {
    display: flex;
    width: 100vw;
    height: 8rem;
    flex-direction: row;
    align-items: center;
    font-size: 0.5rem;
  }
}
</style>
