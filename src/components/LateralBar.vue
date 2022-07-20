<template>
  <header class="header">
    <button class="icon-theme" @click="changeTheme">
      <i class="fa-solid fa-moon"></i>

      {{ textButton }}
    </button>
    <button class="home-icon" @click="$router.push({ name: 'DashBoardView' })">
      <i class="fa-solid fa-house-user fa-lg"></i>
    </button>


    <button class="logout-icon" @click="logout">
      <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LateralBar",
  data() {
    return { DarkThemeOn: false };
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
    async logout() {
      localStorage.removeItem("token")
      localStorage.removeItem("sessionLogin")
      localStorage.removeItem("role");
      this.$router.push({ name: "login" });
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 100vh;
  /* background: rgba(17, 16, 16, 0.747); */
  background: #5159bb;
  box-shadow: 4px 5px 20px;
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
