<template>
  <section id="body-section-dashboard">
    <div
      class="body-menu"
      :class="{
        'dark-mode': DarkthemeOn,
      }"
    >
      <div class="body-icon">
        <i class="fa-solid fa-users"></i>
      </div>

      <span class="list-users">Listar Usuarios</span>
      <div class="link-acess">
        <a class="btn-dashboard" @click="$router.push({ name: 'home' })">
          Acessar
        </a>
      </div>
    </div>

    <div
      class="body-menu"
      :class="{
        'dark-mode': DarkthemeOn,
      }"
      v-if="isAdmin"
    >
      <div class="body-icon">
        <i class="fa-solid fa-user-large"></i>
      </div>
      <span class="list-users">Registrar Usuario</span>
      <div class="link-acess">
        <a class="btn-dashboard" @click="$router.push({ name: 'CreateView' })"
          >Acessar</a
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";
import { ApiService } from "@/services/api";

export default defineComponent({
  name: "DashboardComponent",
  setup() {
    const apiService = new ApiService();
    const user = ref({
      username: "",
    });

    return { user, apiService };
  },
  computed: {
    ...mapGetters({
      isAdmin: "authModule/isAdmin",
      DarkthemeOn: "ThemeModule/getDarkThemeOn",
    }),
  },
  methods: {
    changeCard() {
      this.DarkthemeOn = !this.DarkthemeOn;
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");

span {
  text-align: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
}
.fa-solid {
  color: rgb(244, 244, 244);
}
.link-acess {
  margin-top: 100%;
}
#body-section-dashboard {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.body-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.649);
  margin-bottom: 100%;
}
.body-menu.dark-mode {
  background: #855bfd;
}
.body-menu {
  padding: 1rem;
  margin: 3rem;
  scroll-behavior: smooth;
  width: 368px;
  height: 440px;
  left: 791px;
  top: 167px;
  background: #6b5e8d;

  border-radius: 4px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}
.btn-dashboard {
  background-color: transparent;
  color: black;
}
@media only screen and (max-width: 600px) {
  #body-section-dashboard {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .body-menu {
    scroll-behavior: smooth;
    width: 50%;
    height: 50%;
    padding: 1rem;
    font-weight: 500;
    text-align: start;
  }
  .body-icon {
    width: inherit;
  }
  .list-users {
    font-size: 16px;
  }
}
</style>
